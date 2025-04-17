const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = require('../prisma');

passport.serializeUser((user, done) => {
  done(null, user); // You may want to serialize by user.id in production
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails?.[0].value;

      // Restrict to @pitt.edu
      if (!email || !email.endsWith("@pitt.edu")) {
        return done(null, false, { message: "Must use @pitt.edu email" });
      }

      const user = await prisma.user.upsert({
        where: { email },
        update: {}, // what to do if user exists
        create: {
          email,
          name: profile.displayName,
        },
      });

      return done(null, user);
    }
  )
);

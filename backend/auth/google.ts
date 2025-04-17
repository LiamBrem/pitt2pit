import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.GOOGLE_CALLBACK_URL!,
  },
  async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails?.[0].value;

    if (!email || !email.endsWith('@pitt.edu')) {
      return done(null, false, { message: 'Must sign in with @pitt.edu email' });
    }

    const user = {
      id: profile.id,
      name: profile.displayName,
      email,
    };

    return done(null, user); // In real use, you'd upsert this into your DB
  }
));
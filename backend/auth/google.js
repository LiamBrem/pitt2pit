const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user); // You may want to serialize by user.id in production
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  const email = profile.emails?.[0].value;

  // Restrict to @pitt.edu
  if (!email || !email.endsWith('@pitt.edu')) {
    return done(null, false, { message: 'Must use @pitt.edu email' });
  }

  // Simulate user object (you'd normally look this up in a DB)
  const user = {
    id: profile.id,
    name: profile.displayName,
    email: email
  };

  return done(null, user);
}));
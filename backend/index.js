const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./auth/google'); // Your Google strategy setup

const app = express();

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'defaultsecret',
  resave: false,
  saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Auth routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`Hello ${req.user?.email}, welcome to Pitt2PIT!`);
});

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Login with Pitt Email</a>');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
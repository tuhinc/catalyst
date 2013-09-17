var express = require('express')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , util = require('util')
  , GitHubStrategy = require('passport-github').Strategy;

var GITHUB_CLIENT_ID = "06db21283a3d0a6bc167"
var GITHUB_CLIENT_SECRET = "5b7486baa960a0e3bb1c76bdf5479f54407d0825";

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      
      return done(null, profile);
    });
  }
));

var app = express();

// handles CORS
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, './../app' ) ) );
app.use(app.router);

app.get('/auth/github',
  passport.authenticate('github'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('authenticated')
    res.redirect('/');
  });

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/fail' }),
  function(req, res) {
    console.log(res.req.user.username)
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  // Invoking logout() will remove the req.user property and clear the login session
  console.log(req.user)
  req.logout();
  console.log(req.user)
  res.redirect('/');
});

app.listen(3000);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log('ensured')
  res.redirect('/login')
}





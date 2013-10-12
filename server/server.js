var express = require('express')
  , http = require('http')
  , io = require('socket.io')
  , path = require('path')
  , passport = require('passport')
  , util = require('util')
  , GitHubStrategy = require('passport-github').Strategy
  , AWS = require('aws-sdk');

var GITHUB_CLIENT_ID = "06db21283a3d0a6bc167"
var GITHUB_CLIENT_SECRET = "5b7486baa960a0e3bb1c76bdf5479f54407d0825";

passport.serializeUser(function(user, done) {
  done(null, user);
});

console.log(io);

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
// app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
// app.use(passport.session());

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


// TODO :: port should not be hardcoded
app.io = io.listen( http.createServer(app).listen(3000, function() {
    console.log( 'Express server listening on ' + 3000);
}));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log('ensured')
  res.redirect('/login')
}



/**
 * Don't hard-code your credentials!
 * Load them from disk or your environment instead.
 */
AWS.config.update({accessKeyId: 'AKIAILTJTOPGDX7QCCTQ', secretAccessKey: '7IYSklJlA3VbzmUo1nkGkgccFMjfKENMuQXw2WQm'});

// Instead, do this:
// AWS.config.loadFromPath('./path/to/credentials.json');

// Set your region for future requests.
AWS.config.update({region: 'us-west-1'});

// Create a bucket using bound parameters and put something in it.
// Make sure to change the bucket name from "myBucket" to something unique.
var s3bucket = new AWS.S3({params: {Bucket: 'hrcatalyst'}});
s3bucket.createBucket(function() {
  var data = {Key: 'myKey', Body: 'Hello!'};
  s3bucket.putObject(data, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});




const
    // Import modules for server setup
    path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    // Import environement
    PORT = process.env.PORT || 3000,
    SESSION_SECRET = process.env.SESSION_SECRET,
    // API routes for handling specific requests
    api = require('./routes'),
    auth = require('./routes/auth'),
    assetsFolder = path.resolve(__dirname, '../public'),
    // Import MongoDB configuration and access
    models = require('./models'),
    User = models.User;

// ***** Set up middleware
// Configure assets access
app.use(express.static(assetsFolder));
// Make the body of a request available in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Configure each request to initialize a session
//   Passport takes over after session is created
//   Session creation does not mean authentication
//   Only store info in session once authentication has passed
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
// Simple strategy to check password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if (!user) {
            return done(null, false);
        }
        if(!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
        }
        return done(null, user);
    });
}));
// User serialization for req.user access
passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((req, id, done) => {
    User.findById(id, (err, user) => {
        const reqUser = user.toObject();
        done(err, reqUser);
    });
});
// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

//
// Routing logic
//
// Send React package for all get routes..
//  Further logic is taken care of by React-router
app.get('/*', (req, res) => {
    res.sendFile(assetsFolder + '/index.html');
});
// Apply middleware for authentication
//   Check for authentication route
app.use(auth(passport));
// API can only be accessed by logged in user
app.use((req, res, next) => {
    if(req.user) {
        next();
    } else {
        res.send("not logged in");
    }
});
app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`-------> Server running! Listening on port ${PORT}.`);
});

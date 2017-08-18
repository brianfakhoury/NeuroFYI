const
    express = require('express'),
    User = require('../models').User,
    router = express.Router(),
    bcrypt = require('bcrypt'),
    saltRounds = 10;

module.exports = (passport) => {
    router.post('/login', passport.authenticate('local'), (req, res) => res.send( { user: req.user }));

    router.post('/register', req =>
        bcrypt.hash(req.body.password, saltRounds)
        .then((hash)=>{
            const newUser = new User({
                username: req.body.username,
                password: hash
            });
            newUser.save();
        }
    ));

    router.post('/logout', req => {
        req.logout();
    });

    return router;
};

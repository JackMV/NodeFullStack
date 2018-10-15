const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../repository/mongoRepsoitory');
const router = express.Router();

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('inside localStrategy callback');
    userModel.findOne({ username: username }, function (err, user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return done(err);
        }
        if (!user || !result) {
          return done(null, false, { message: 'Invalid Username or Password' });
        }
        return done(null, user);
      });
    });
  }
));

passport.serializeUser((user, done) => {
  console.log('inside serializeUser callback');
  done(null, user.id);
})

router.use(passport.initialize());
router.use(passport.session());

/* GET api listing. */
router.post('/storeUser', (req, res, next) => {
  let user = new userModel(req.body);
  bcrypt.hash('123', 8, function(err, hash) {
    user.password = hash;
    user.userGroup = 'Admin';
    user.save(function (err) {
      if (err) return next(err);
      console.log('saved user!');
    });
  });

  // console.log(user);
  res.send(user);
});

router.get('/user/:id', (req, res, next) => {
  console.log('getting user with ID' + req.params.id);
  let user = userModel.find({'id':req.params.id}, '-_id username id', function (err, user) {
    if (err) return next(err);
    res.send(user);
  });
  // console.log(user);
  // res.send(user);
});

router.post('/login', (req, res, next) => {
  console.log('received:')
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    req.login(user, (err) => {
      return res.send('logged in successfully');
    });
  });
  // let user = userModel.findOne({'username':req.body.username}, function (err, responseUser) {
  //   if (err) return handleEerror(err);
  //   if (responseUser) {
  //     bcrypt.compare(req.body.password, responseUser.password, function (err, result) {
  //       if (result) {
  //         responseUser.password = '';
  //         res.locals.user = responseUser;
  //         res.send(responseUser);
  //         // next();
  //       } else {
  //         console.log('invalid password');
  //         let error = new Error('Invalid username or password');
  //         error.status = 401;
  //         next(error);
  //       }
  //     });
  //   } else {
  //     console.log('unable to find user');
  //     let error = new Error('Invalid username or password');
  //     error.status = 401;
  //     next(error);
  //   }
  // });
});

router.post('/register', (req, res, next) => {

})

module.exports = router;

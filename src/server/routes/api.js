const express = require('express');
const uuid = require('uuid/v5');
const bcrypt = require('bcryptjs');
const userModel = require('../repository/mongoRepsoitory')
const PROJECT_NAMESPACE = '226eb060-cd74-11e8-a7a4-1f7db68dbea2';
const router = express.Router();

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
  let user = userModel.find({'id':req.params.id}, '-_id username id', function (err, responseUser) {
    if (err) return next(err);
    res.send(responseUser);
  });
  // console.log(user);
  // res.send(user);
});

router.post('/login', (req, res, next) => {
  console.log('logging in as ' + req.body.username);
  let user = userModel.findOne({'username':req.body.username}, function (err, responseUser) {
    if (err) return handleEerror(err);
    if (responseUser) {
      bcrypt.compare(req.body.password, responseUser.password, function (err, result) {
        if (result) {
          responseUser.password = '';
          res.locals.user = responseUser;
          next();
        } else {
          console.log('invalid password');
          let error = new Error('Invalid username or password');
          error.status = 401;
          next(error);
        }
      });
    } else {
      console.log('unable to find user');
      let error = new Error('Invalid username or password');
      error.status = 401;
      next(error);
    }
  });
},
function (req, res, next) {
  console.log(res.locals.user);
  res.send(uuid('Valid Client', PROJECT_NAMESPACE));
});

router.post('/register', (req, res, next) => {

})

module.exports = router;

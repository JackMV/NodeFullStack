const express = require('express');
const userModel = require('../repository/mongoRepsoitory')
const router = express.Router();

/* GET api listing. */
router.post('/storeUser', (req, res, next) => {
  let user = new userModel(req.body);
  user.password = '123';
  user.userGroup = 'Admin';

  // console.log(user);
  user.save(function (err) {
    if (err) return next(err);
    // saved!
  });
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
  console.log('logging in');
  console.log('request' + req.params.password);
  let user = userModel.find({'name':req.params.username}, 'username password userGroup', function (err, responseUser) {
    if (err) return handleEerror(err);
    console.log('pwd from db: ' + responseUser.password);
    console.log('input pwd: ' + req.params.password);
    if (responseUser.password === req.params.password) {
      responseUser.password = '';
      res.send(responseUser);
    } else {
      let err = new Error('Invalid username or password');
      err.status = 401;
      return next(err);
    }
  });
});

module.exports = router;

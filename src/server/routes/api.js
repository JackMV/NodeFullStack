const express = require('express');
const userModel = require('../repository/mongoRepsoitory')
const router = express.Router();

/* GET api listing. */
router.post('/storeUser', (req, res) => {
  let user = new userModel(req.body);

  // console.log(user);
  user.save(function (err) {
    if (err) console.err(handleError(err));
    // saved!
  });
  res.send('api works');
});

router.get('/user/:id', (req, res) => {
  console.log('getting user with ID' + req.params.id);
  let user = userModel.find({'id':req.params.id}, '-_id name id', function (err, responseUser) {
    if (err) return handleError(err);
    res.send(responseUser);
  });
  // console.log(user);
  // res.send(user);
});

module.exports = router;

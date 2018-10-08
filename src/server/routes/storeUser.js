var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log('post request recieved' + req);
});

module.exports = router;

const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userGroup: {
    type: String,
    required: true,
    trim: true
  }
});

// userSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });

let userModel = mongoose.model('user', userSchema);
module.exports = userModel;

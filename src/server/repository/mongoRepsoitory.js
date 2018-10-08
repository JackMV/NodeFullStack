const mongoose = require('mongoose');

var Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  id: Number
});

let userModel = mongoose.model('user', userSchema);

module.exports = userModel;

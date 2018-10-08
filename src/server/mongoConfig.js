const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/users'
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;

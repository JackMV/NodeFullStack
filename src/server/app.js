const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const Filestore = require('session-file-store')(session);
const uuid = require('uuid/v5');
const bodyParser = require('body-parser');
const PROJECT_NAMESPACE = '226eb060-cd74-11e8-a7a4-1f7db68dbea2';

const db = require('./mongoConfig');

require('dotenv').config();
// var staticRoot = __dirname + '/public';

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var storeRouter = require('./routes/storeUser');

const api = require('./routes/api');

var app = express();

// app.set('view engine', 'jade');
// app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/javascripts')));
app.use(cors({origin:'http://localhost:4200'}));

app.use(session({
  genid: (req) => {
    console.log('inside session generation function');
    return uuid('Valid Client', PROJECT_NAMESPACE);
  },
  store: new Filestore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use('/api', api);

// app.use('/', indexRouter);
app.get('*', function(req, res, next) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'public/javascripts/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send();
});

module.exports = app;

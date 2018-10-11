var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require('./mongoConfig');
// var staticRoot = __dirname + '/public';

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var storeRouter = require('./routes/storeUser');

const api = require('./routes/api');

var app = express();

// app.set('view engine', 'jade');
// app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/javascripts')));
app.use(cors({origin:'http://localhost:4200'}));

app.use('/api', api);

// app.use('/', indexRouter);
app.use('*', function(req, res, next) {
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

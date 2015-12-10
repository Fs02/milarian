var config = require('config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');

var routes = require('./routes/index');
var admin = require('./routes/admin');
var account = require('./routes/account');
var users = require('./routes/users');
var companies = require('./routes/companies');
var vacancies = require('./routes/vacancies');
var backdoor = require('./routes/backdoor');

var mongoose = require('mongoose');
mongoose.connect(config.get('mongo_uri'), function(err) {
  if (err) {
    console.log('Database connection error', err);
  } else {
    console.log('Connected to database');
  }
});

var app = express();

app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', routes);
app.use('/admin', admin);
app.use('/account', account);
app.use('/users', users);
app.use('/companies', companies);
app.use('/vacancies', vacancies);
app.use('/backdoor', backdoor);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

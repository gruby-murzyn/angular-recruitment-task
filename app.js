var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var bodyParser =require('body-parser')
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');

var app = express();
//Cors Middleware
app.use(cors());
// Body Parser Middleware
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname + 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '/movies-client')));
var winston = require('./config/winston');
app.use('/', indexRouter);
app.use('/api', moviesRouter);
app.use(morgan('combined', { stream: winston.stream }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

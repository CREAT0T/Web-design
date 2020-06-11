const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/test');
const registerRouter = require('./routes/register');
const shopRouter = require('./routes/shop');
const basketRouter = require('./routes/basket');
const newsRouter = require('./routes/news');
const settingRouter = require('./routes/setting');
const addgoodRouter = require('./routes/addgood');
const addnewsRouter = require('./routes/addnews');
const delgoodRouter = require('./routes/delgood');
const delnewsRouter = require('./routes/delnews');


var app=express();

const cors = require('cors');
app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test',testRouter);
app.use('/register',registerRouter);
app.use('/shop',shopRouter);
app.use('/basket',basketRouter);
app.use('/news',newsRouter);
app.use('/setting',settingRouter);
app.use('/addnews',addnewsRouter);
app.use('/addgood',addgoodRouter);
app.use('/delnews',delnewsRouter);
app.use('/delgood',delgoodRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
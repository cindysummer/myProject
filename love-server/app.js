var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
var goodsRouter = require('./routes/goods');
var ordersRouter = require('./routes/orders');
var servicesRouter = require('./routes/services');
var petsRouter = require('./routes/pets');
var masterRouter = require('./routes/master');

var app = express();
require("./dao/database");//引入链接数据库的文件即可

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);
app.use('/goods', goodsRouter);
app.use('/master', masterRouter);
app.use('/orders', ordersRouter);
app.use('/pet', petsRouter);
app.use('/service', servicesRouter);

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

// module.exports = app;
app.listen("3000",console.log("3000 端口已成功启动"));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const UserRouter = require('./routes/admin/UserRouter')
const JWT = require('./util/JWT');
const { ErrorCodes } = require('vue');

var app = express();

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

/*
Target: 2 kinds of api:
  /adminapi/*: for back end management system
  /webapi/*: for company website
*/
app.use((req, res, next)=>{
  // the first time login doesn't have valid token
  if(req.url === "/adminapi/user/login"){
    next()
    return;
  }

  const token = req.headers["authorization"].split(" ")[1]
  // if token is verified successfully, next()
  if(token){
    var payload = JWT.verify(token)
    console.log("payload: ",payload)
    if(payload){
      // refresh expire time of token
      const newToken = JWT.generate({
        _id: payload._id, 
        username: payload.username
      }, "1d")
      res.header("Authorization", newToken)
      next()
    } else {
      res.status(401).send({errCode: "-1", errorInfo:"token expired"})
    }
    // next()
  } 
  // else {
  //   // if token is invalid or expired, return 401
  //   return 401
  // }
})
app.use(UserRouter)


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

module.exports = app;

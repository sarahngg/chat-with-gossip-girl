var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messagesRouter = require('./routes/messages'); // REQUIRE THE MESSAGE MODULE
var testAPIRouter = require("./routes/testAPI"); // REQUIRE NEW ROUTE
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use("/testAPI", testAPIRouter); // NEW ROUTE
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

// /*
//   The Global Object
//   https://nodejs.org/api/globals.html
// */
// setTimeout(function(){
//   console.log('3 seconds have passed');
// }, 3000);

// var time = 0;
// var timer = setInterval(function(){
//   time +=2;
//   console.log(time + ' seconds have passed');
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// // Prints directory
// console.log(__dirname);

// // Prints file
// console.log(__filename);

// /* 
//   Function Expressions
//   - common expression in node
// */

// // Normal function statement
// function sayHi(){
//   console.log('hi');
// }

// sayHi(); // invoke function by name

// // Function expression - anoymous function
// var sayBye = function(){ // set anon function to variable
//   console.log('bye');
// };

// //sayBye(); // invoke function by var()

// function callFunction(fun) {
//   console.log('This function takes another function as a param');
//   fun(); // then call the function
// }

// callFunction(sayBye);


/*
  Module
*/





module.exports = app;

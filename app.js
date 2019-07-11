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
var dt = require("dotenv").config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 9000;
app.use(bodyParser.json());
app.use (dt);

let Message = require('./models/message');
// MongoDB database
// const dbRoute =
//   'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-turih.mongodb.net/message?retryWrites=true&w=majority';
// connects our back end code with the database
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-turih.mongodb.net/message?retryWrites=true&w=majority', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

// // checks if connection with the database is successful
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // logging and bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(logger('dev'));

const messageDbRoutes = express.Router();
messageDbRoutes.route('/').get(function(req, res) {
  Message.find(function(err, message) {
      if (err) {
          console.log(err);
      } else {
          res.json(message);
      }
  });
});

messageDbRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Message.findById(id, function(err, message) {
      res.json(message);
  });
});

messageDbRoutes.route('/update/:id').post(function(req, res) {
  Message.findById(req.params.id, function(err, message) {
      if (!message)
          res.status(404).send("data is not found");
      else 
          message.key = req.body.key;
          message.id = req.body.id;
          message.showDetails = req.body.showDetails;
          message.received = req.body.received;
          message.name = req.body.name;
          message.tea = req.body.tea;
          message.media = req.body.media;

          message.save().then(message => {
              res.json('Message updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
        
  });
});



messageDbRoutes.route('/add').post(function(req, res) {
  res.setHeader('Content-Type', 'appliction/json');
  let message = new Message(req.body);
  message.save()
      .then(message => {
          res.status(200).json({'message': 'message added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new message failed');
      });
});

app.use('/messagedb', messageDbRoutes);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use('/testAPI', testAPIRouter); // NEW ROUTE



app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
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
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




module.exports = app;

// db.message.insertMany(
//   [{ key:1, id: '1', showDetails: false, received: true, name:"GossipGirl", tea:"Hey Upper East Siders. Gossip Girl here. And I have the biggest news ever.", media:""},
//   { key:2, id: '2', showDetails: false, received: false, name:"", tea:"Do you have the tea?", media:""},
//   { key:3, id: '3', showDetails: false, received: true, name:"Melanie91", tea:"Spotted at Grand Central, bags in hand: Serena van der Woodsen.", media:""}, 
//   { key:4, id: '4', showDetails: false, received: true, name:"Melanie91", tea:"", media:"https://vignette.wikia.nocookie.net/gossipgirl/images/2/25/101GossipGirl0049.jpg"}, 
//   { key:5, id: '5', showDetails: false, received: true, name:"GossipGirl", tea:"Was it only a year ago our It Girl mysteriously disappeared for “boarding school”? And just as suddenly, she’s back. Don’t believe me? See for yourselves. Lucky for us, Melanie91 sent proof. Thanks for the photo, Mel", media:""},
//   ],
//   {"ordered": true}
//   );


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
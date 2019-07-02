var express = require('express');
var router = express.Router();
let Message = require('../models/message');

// var messages = [
//   { key:1, id: '1', showDetails: false, received: true, name:"GossipGirl", tea:"Hey Upper East Siders. Gossip Girl here 🤫 And I have the biggest news ever.", media:""},
//   { key:2, id: '2', showDetails: false, received: false, name:"", tea:"Do you have the tea? 🍵🍵", media:""},
//   { key:3, id: '3', showDetails: false, received: true, name:"Melanie91", tea:"Spotted at Grand Central, bags in hand: Serena van der Woodsen.", media:""}, 
//   { key:4, id: '4', showDetails: false, received: true, name:"Melanie91", tea:"", media:"https://vignette.wikia.nocookie.net/gossipgirl/images/2/25/101GossipGirl0049.jpg"}, 
//   { key:5, id: '5', showDetails: false, received: true, name:"GossipGirl", tea:"Was it only a year ago our It Girl mysteriously disappeared for “boarding school”? And just as suddenly, she’s back. Don’t believe me? See for yourselves. Lucky for us, Melanie91 sent proof. Thanks for the photo, Mel 😘", media:""},
      
// ]

router.get('/', function(req, res) {
  Message.find(function(err, messages) {
      if (err) {
          console.log(err);
      } else {
          res.json(messages);
      }
  });
});

router.get('/:id', function(req, res) {
  let id = req.params.id;
  Message.findById(id, function(err, message) {
      res.json(message);
  });
});
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.setHeader('Content-Type', 'appliction/json');
//   //res.send("API is working properly");
//   res.send(JSON.stringify(messages));
  
//   //res.json(users);
// });

router.post('/add', function(req, res) {
  let message = new Message(req.body);
  message.save()
      .then(message => {
          res.status(200).json({'message': 'message added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new message failed');
      });
});

// router.post('/', function(req, res,next) {
//   //request
//   let new_messages = req.body;
//   messages.push(new_messages);

//   //respond 
//   res.json(new_messages);
// });



// router.delete('/:id', function(req, res,next) {
//   //request
//   //console.log(req);
//   // console.log(messages);
//   // messages.pop()
//   // res.json(messages);
//   let id = req.params.id;
//   // console.log(id);
//   function check(messages) {
//     return messages.id !== id;
//   }
//   messages = messages.filter(check);
//   console.log(messages);
// });

module.exports = router;

var express = require('express');
var router = express.Router();

var messages = [
  { key:1, id: '1', showDetails: false, received: true, name:"GossipGirl", tea:"TEST Hey Upper East Siders. Gossip Girl here 🤫 And I have the biggest news ever.", media:""},
  { key:2, id: '2', showDetails: false, received: false, name:"", tea:"Do you have the tea? 🍵🍵", media:""},
  { key:3, id: '3', showDetails: false, received: true, name:"Melanie91", tea:"Spotted at Grand Central, bags in hand: Serena van der Woodsen.", media:""}, 
  { key:4, id: '4', showDetails: false, received: true, name:"Melanie91", tea:"", media:"https://vignette.wikia.nocookie.net/gossipgirl/images/2/25/101GossipGirl0049.jpg"}, 
  { key:5, id: '5', showDetails: false, received: true, name:"GossipGirl", tea:"Was it only a year ago our It Girl mysteriously disappeared for “boarding school”? And just as suddenly, she’s back. Don’t believe me? See for yourselves. Lucky for us, Melanie91 sent proof. Thanks for the photo, Mel 😘", media:""},
      
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'appliction/json');
  //res.send("API is working properly");
  res.send(JSON.stringify(messages));
  
  //res.json(users);
});

router.post('/', function(req, res,next) {
  //request
  new_messages = req.body;
  messages.push(new_messages);

  //respond 
  res.json(new_messages);
});


router.delete('/', function(req, res,next) {
  //request
  console.log(req.body);
  console.log(messages);
  messages.pop()
  res.json(messages);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var messages = [
  { "key":"1", "id": '1', "showDetails": "false", "received": "true", "name":"GossipGirl", "tea":"Hey Upper East Siders. Gossip Girl here 🤫 And I have the biggest news ever.", "media":""},
  { "key":2, "id": '2', "showDetails": "false", "received": "false", "name":"", "tea":"Do you have the tea? 🍵🍵", "media":""}      
  
]
/* GET messages listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'appliction/json')
  res.send(JSON.stringify(messages));
});

router.post('/', function(req, res,next) {
  //request
  new_message = req.body;
  messages.push(new_message);

  //respond 
  res.json(new_message);
});

// // route params
// router.get('/profile/:id', function(req, res){
//   //
//   res.send('This is ' + req.params.id + '\'s profile');
// });

module.exports = router;

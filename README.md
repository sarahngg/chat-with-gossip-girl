# Chat with Gossip Girl
What would it be like if all Gossip Girl characters use iMessage to receive the latest news on the upper east side? 

**View Front-end Demo 👉 [here](https://sarahngg.github.io/chat-with-gossip-girl/)**

**Deployed App** 👉 [here](https://chat-with-gossip-girl.herokuapp.com/) (buggy)

This app displays Gossip Girl's text messages in an iMessage/Messenger-themed web app, taking a modern spin on the [pilot episode](https://gossipgirl.fandom.com/wiki/Pilot) of the popular TV series. User can add new message from text input, hover to view individual message details, and double click to delete messages.

## Technologies Used

**MongoDB**

* Stored initial messages
* Specified schema
* Used Mongoose to connect to database

**Express/Node**

* ~Stores Initialized messages~ [Replaced with MongoDB]
* ~Routes HTTP requests~ [Replaced with Axios]
  * ~GET: fetch initial messages from server~
  * ~POST: append new message to the list of messages~
  * ~DELETE: get message id from `req.params` and return a filtered message list~

**React**

- Designed and displayed nested UI components with JSX
- Handled events (onChange in input, onMouseEnter/onMouseLeave/onDoubleClick)

**Redux**

- Maintained states in the store and dispatched actions to change state using Redux
- ~Stored and specified initial messages in reducer~ [Using MongoDB]
- Tracked messages and message count in store for creating new message id

**CSS**

* Styled messages according to iMessage/Facebook Messenger

**Other**

* Designed custom favicon

## User Interaction
* User can enter message in text input and add the message to a list
* User can hover on a message to see the details (sender and message id)
* User can double click a message to delete
## Challenges

* First time creating a React + Redux app
* Work with immutable state
* No additional libraries used
* Forget to add other elements when returning an updated state in reducers
* Work with many files and folders in the [standard layout](https://medium.com/front-end-weekly/the-three-pigs-how-to-structure-react-redux-application-67f5e3c68392)
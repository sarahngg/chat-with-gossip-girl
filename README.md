# Chat with Gossip Girl
What would it be like if all Gossip Girl characters use iMessage to receive the latest news on the upper east side? 

**View Demo 👉 [here](https://sarahngg.github.io/chat-with-gossip-girl/)**

This app displays Gossip Girl's text messages in an iMessage/Messenger-themed web app, taking a modern spin on the [pilot episode](https://gossipgirl.fandom.com/wiki/Pilot) of the popular TV series. User can add new message from text input, click and view individual message details, and double click to delete messages.

## Technologies Used

**React JS**

- Designed and displayed nested UI components with JSX
- Handled mouse events

**Redux**

- Maintained states in the store and dispatched actions to change state using Redux
- Stored and specified initial messages in reducer
- Tracked messages and message count in store for creating new message id

**CSS**

* Styled messages according to iMessage/Facebook Messenger

**Other**

* Designed custom favicon

## User Interaction
* User can enter message in text input and add the message to a list
* User can click a message to see the details (sender and message id)
* User can double click a message to delete
## Challenges

* First time creating a React + Redux app
* Challenging to make sense of immutable state and work with no additional libraries
* Forget to add other elements when returning an updated state in reducers
* Working with many files and folders in the [standard layout](https://medium.com/front-end-weekly/the-three-pigs-how-to-structure-react-redux-application-67f5e3c68392)
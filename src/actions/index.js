
//import fetch from 'cross-fetch';
export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_TIP_COUNT = 'ADD_TIP_COUNT';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const TOGGLE_MESSAGE_DETAILS = 'TOGGLE_MESSAGE_DETAILS';

export function fetchMessages() {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch("http://localhost:9000/messages/")
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(fetchMessagesSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchMessagesBegin = () => ({
    type: FETCH_MESSAGES_BEGIN,
});


export const fetchMessagesSuccess = messages => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: messages ,
    //jsn: JSON.parse({ messages })
    //messages: JSON.data.children.map(child => child.data),
    //receivedAt: Date.now()
});

export const fetchMessagesFailure  = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: { error }
});

//// UI
export const addMessage = messageObj => { 
  console.log(messageObj);
   //addMessageToState(messageObj.tea);
  return dispatch => {
    dispatch(addMessageToState(messageObj.tea));
    return fetch("http://localhost:9000/messages/", {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(messageObj)
    })
    //.then(json)
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
 }
};

export const addMessageToState = message => {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
};


export const addTipCount = amount => {
    return {
        type: ADD_TIP_COUNT,
        payload: amount
    }
}

export const deleteMessage = id => {
  return {
    type: DELETE_MESSAGE,
    payload: id 
  };
};

export const toggleDetails = id => {
  return {
    type: 'TOGGLE_MESSAGE_DETAILS',
    payload: id 
  };
};

// export function fetchMessages() {
//   // Thunk middleware knows how to handle functions.
//   // It passes the dispatch method as an argument to the function,
//   // thus making it able to dispatch actions itself.

//   return function(dispatch) {
//     // First dispatch: the app state is updated to inform
//     // that the API call is starting.

//     dispatch(requestMessages())

//     // The function called by the thunk middleware can return a value,
//     // that is passed on as the return value of the dispatch method.

//     // In this case, we return a promise to wait for.
//     // This is not required by thunk middleware, but it is convenient for us.

//     return fetch('/messages')
//       .then(
//         response => response.json(),
//         // Do not use catch, because that will also catch
//         // any errors in the dispatch and resulting render,
//         // causing a loop of 'Unexpected batch number' errors.
//         // https://github.com/facebook/react/issues/6895
//         error => console.log('An error occurred.', error)
//       )
//       .then(json =>
//         // We can dispatch many times!
//         // Here, we update the app state with the results of the API call.

//         dispatch(receiveMessages(json))
//       )
//   }
// }


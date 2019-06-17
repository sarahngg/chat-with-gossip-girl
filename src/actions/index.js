
//import fetch from 'cross-fetch';

export function requestMessages() {
  return{
    type: 'REQUEST_MESSAGES',
    
  }
}

export function receiveMessages(json) {
  return {
    type: 'RECEIVE_MESSAGES',
    messages: JSON.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
//// UI
export const addMessage = message => { 
  return {
    type: 'ADD_MESSAGE',
    payload: message
  };
};

export const addTipCount = amount => {
    return {
        type: 'ADD_TIP_COUNT',
        payload: amount
    }
}

export const deleteMessage = id => {
  return {
    type: 'DELETE_MESSAGE',
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


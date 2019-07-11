import axios from 'axios';
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
    return axios.get("/messagedb/")
      //.then(handleErrors)
      //.then(res => res.json())
      .then(res => {
        //console.log(data);
        dispatch(fetchMessagesSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

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
// export const addMessage = messageObj => { 
//   console.log(messageObj);
//    //addMessageToState(messageObj.tea);
//   return dispatch => {
//     dispatch(addMessageToState(messageObj.tea));
//     return fetch('http://localhost:9000/messages/', {
//       method: 'post',
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify(messageObj)
//     })
//     //.then(json)
//     .then(function (data) {
//       console.log('Request succeeded with JSON response', data);
//     })
//     .catch(function (error) {
//       console.log('Request failed', error);
//     });
//  }
// };


export const addMessage = messageObj => { 
  console.log(messageObj);
   //addMessageToState(messageObj.tea);
  return dispatch => {
    dispatch(addMessageToState(messageObj.tea));
    return axios.post('/messagedb/add', messageObj)
    .then(res => {
      //console.log(res);
      console.log('Posted', res.data);
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

// export const deleteMessage = id => { 
  
//   return dispatch => {
//     dispatch(deleteMessageFromState(id));
//     return fetch("http://localhost:9000/messages/", {
//       method: 'delete',
//     })
//     //.then(json)
//     .then(function (data) {
//       console.log('Deleted with JSON response', data);
//     })
//     .catch(function (error) {
//       console.log('Request failed', error);
//     });
//  }

// };


export const deleteMessage = id => { 
  
  return dispatch => {
    dispatch(deleteMessageFromState(id));
    return axios.delete('/messages/' + id)
    //.then(json)
    .then(function (data) {
      console.log('Deleted with JSON response', data);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
 }

};


export const deleteMessageFromState = id => {
  return {
    type: DELETE_MESSAGE,
    payload: id 
  };
};


export const toggleDetails = id => {
  return {
    type: TOGGLE_MESSAGE_DETAILS,
    payload: id 
  };
};


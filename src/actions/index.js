////Actions defined in rootReducer

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
  };
};

export const deleteMessage = id => {
  return {
    type: 'DELETE_MESSAGE',
    payload: id //id: id
  };
};

export const toggleDetails = id => {
  return {
    type: 'TOGGLE_MESSAGE_DETAILS',
    payload: id //id: id
  };
};

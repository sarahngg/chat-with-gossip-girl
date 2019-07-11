//import { combineReducers } from 'redux';
import { 
    FETCH_MESSAGES_BEGIN,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE
} from '../actions';

const initialState = {
    storeCount: 5,
    storeTips: [],
    isFetching: false,
    error: null,
    newMessage: "",
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MESSAGES_BEGIN: 
            console.log('FETCH_MESSAGES_BEGIN');
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_MESSAGES_SUCCESS: 
            console.log('FETCH_MESSAGES_SUCCESS: action.payload ', action.payload);
            return {
                ...state,
                //storeCount: action.payload.messages.length(),
                isFetching: false,
                storeTips: action.payload
            };
        case FETCH_MESSAGES_FAILURE: 
            console.log('FETCH_MESSAGES_FAILURE: ', action.payload);
            return {
                ...state,
                isFetching: false,
                storeTips: [],
                error: action.payload.error,
            };

        // case 'ADD_TIP_COUNT': {
        //     //console.log('invoked ADD_TIP_COUNT');
        //     //console.log('Reducer before storeCount: '  + state.storeCount);
        //     const newTipCount = state.storeCount + action.payload;
        //     //console.log('Reducer after storeCount: ' + state.storeCount);
        //     //console.log('Reducer after newTipCount: ' + newTipCount);
        //     return {
        //         ...state,
        //         storeCount: newTipCount,
        //     }
        // }

        case 'ADD_MESSAGE': {
            //console.log('invoked ADD_MESSAGE on' + action.payload);
            const newTipCount = state.storeCount + 1;
            const storeCountString = state.storeCount.toString()
            return {
                ...state,
                storeTips: [...state.storeTips, {key:newTipCount, id:newTipCount.toString(), showDetails: false, received: false, name:"", tea:action.payload, media:""}],
                newMessage: {key:state.storeCount, id:storeCountString, showDetails: false, received: false, name:"", tea:action.payload, media:""},
                storeCount: newTipCount,
            }
        }

        case 'DELETE_MESSAGE': {
            //console.log('invoked DELETE_MESSAGE on' + action.id);
            let updatedStoreTips = state.storeTips.filter(tips => {
                return action.payload !== tips.id
            });
            return {
                ...state,
                storeTips: updatedStoreTips
            }
        }
        case 'TOGGLE_MESSAGE_DETAILS': {
            //console.log('invoked TOGGLE_MESSAGE_DETAILS on' + action.id);
            let updatedStoreTips = [];
            for (let index in state.storeTips) {
                let tip = state.storeTips[index];
                if (tip.id === action.payload) {
                    //console.log(tip.showDetails);
                    tip.showDetails = !tip.showDetails;
                    //console.log(tip.showDetails);
                }
                updatedStoreTips.push(tip);
            }
            return  {
                ...state,
                storeTips: updatedStoreTips
            }
        }

        default:
        //console.log(action);
        return state;
    }
}


export default rootReducer;
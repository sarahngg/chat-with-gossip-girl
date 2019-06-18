import { combineReducers } from 'redux';
import { 
    FETCH_MESSAGES_BEGIN,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE
} from '../actions';

const initialState = {
    storeCount: 0,
    storeTips: [
            // { key:1, id: '1', showDetails: false, received: true, name:"GossipGirl", tea:"Hey Upper East Siders. Gossip Girl here 🤫 And I have the biggest news ever.", media:""},
            // { key:2, id: '2', showDetails: false, received: false, name:"", tea:"Do you have the tea? 🍵🍵", media:""},
            // { key:3, id: '3', showDetails: false, received: true, name:"Melanie91", tea:"Spotted at Grand Central, bags in hand: Serena van der Woodsen.", media:""}, 
            // { key:4, id: '4', showDetails: false, received: true, name:"Melanie91", tea:"", media:"https://vignette.wikia.nocookie.net/gossipgirl/images/2/25/101GossipGirl0049.jpg"}, 
            // { key:5, id: '5', showDetails: false, received: true, name:"GossipGirl", tea:"Was it only a year ago our It Girl mysteriously disappeared for “boarding school”? And just as suddenly, she’s back. Don’t believe me? See for yourselves. Lucky for us, Melanie91 sent proof. Thanks for the photo, Mel 😘", media:""},
                
    ],
    isFetching: false,
    error: null,
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
            console.log('FETCH_MESSAGES_SUCCESS');
            console.log(action.payload);
            //console.log('FETCH_MESSAGES_SUCCESS: action.payload.jsn: ' + action.payload.jsn);
            return {
                ...state,
                //storeCount: action.payload.messages.length(),
                isFetching: false,
                storeTips: action.payload
            };
        case FETCH_MESSAGES_FAILURE: 
            console.log('FETCH_MESSAGES_FAILURE: '+ action.payload);
            return {
                ...state,
                isFetching: false,
                storeTips: [],
                error: action.payload.error,
            };

        case 'ADD_TIP_COUNT': {
            //console.log('invoked ADD_TIP_COUNT');
            //console.log('Reducer before storeCount: '  + state.storeCount);
            const newTipCount = state.storeCount + action.payload;
            //console.log('Reducer after storeCount: ' + state.storeCount);
            //console.log('Reducer after newTipCount: ' + newTipCount);
            return {
                ...state,
                storeCount: newTipCount,
            }
        }

        case 'ADD_MESSAGE': {
            //console.log('invoked ADD_MESSAGE on' + action.payload);
            const storeCountString = state.storeCount.toString()
            return {
                ...state,
                storeTips: [...state.storeTips, {key:state.storeCount, id:storeCountString, showDetails: false, received: false, name:"", tea:action.payload, media:""}]
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
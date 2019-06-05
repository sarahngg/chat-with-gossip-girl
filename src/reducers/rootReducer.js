const initialState = {
    storeCount: 5,
    storeTips: [
            { key:1, id: '1', showDetails: false, received: true, name:"GossipGirl", tea:"Hey Upper East Siders. Gossip Girl here 🤫 And I have the biggest news ever.", media:""},
            { key:2, id: '2', showDetails: false, received: false, name:"", tea:"Do you have the tea? 🍵🍵", media:""},
            { key:3, id: '3', showDetails: false, received: true, name:"Melanie91", tea:"Spotted at Grand Central, bags in hand: Serena van der Woodsen.", media:""}, 
            { key:4, id: '4', showDetails: false, received: true, name:"Melanie91", tea:"", media:"https://vignette.wikia.nocookie.net/gossipgirl/images/2/25/101GossipGirl0049.jpg"}, 
            { key:5, id: '5', showDetails: false, received: true, name:"GossipGirl", tea:"Was it only a year ago our It Girl mysteriously disappeared for “boarding school”? And just as suddenly, she’s back. Don’t believe me? See for yourselves. Lucky for us, Melanie91 sent proof. Thanks for the photo, Mel 😘", media:""},
                
    ],
    
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TIP_COUNT') {
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

    if (action.type === 'ADD_MESSAGE') {
        //console.log('invoked ADD_MESSAGE on' + action.payload);
        const storeCountString = state.storeCount.toString()
        return {
            ...state,
            storeTips: [...state.storeTips, {key:state.storeCount, id:storeCountString, showDetails: false, received: false, name:"", tea:action.payload, media:""}]
        }
    }

    if (action.type === 'DELETE_MESSAGE') {
        //console.log('invoked DELETE_MESSAGE on' + action.id);
        let updatedStoreTips = state.storeTips.filter(tips => {
            return action.id !== tips.id
        });
        return {
            ...state,
            storeTips: updatedStoreTips
        }
    }
    if (action.type === 'TOGGLE_MESSAGE_DETAILS') {
        //console.log('invoked TOGGLE_MESSAGE_DETAILS on' + action.id);
        let updatedStoreTips = [];
        for (let index in state.storeTips) {
            let tip = state.storeTips[index];
            if (tip.id === action.id) {
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
    
    //console.log(action);
    return state;
}

export default rootReducer;
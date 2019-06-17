import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, addTipCount } from '../actions';

//let handleSubmit
class SendTips extends Component {
    constructor() {
        super();
        this.state = {message: ''};
    }
    handleFormChange =(e)=> {
        this.setState({
            message: e.target.value
        });
    }
    handleSubmit =(e)=> {
        e.preventDefault(); //prevent default refreshing
        //console.log("Form submitted!", this.state.message);
        this.props.addTipCount(1);
        //console.log('SendTips.js ' + this.props.tipCount);
        this.props.addMessage(this.state.message);
        console.log(this.state.message);
        this.setState({message: ''});
        console.log(this.state.message);
        //e.target.value = "";
    }
    
    render() {
        //console.log(this.props);
        return(
            <div className="centered reply">
                <form onSubmit = {this.handleSubmit}>
                    <input type ='text' id='msg' onChange={this.handleFormChange} value={this.state.message} placeholder="Double click message to delete"/>
                    <button>Send</button>
                    
                </form>
            </div>

        )
    }
}

// const mapStateToProps = (state) => {
//     return { 
//         tipCount: state.tipCount
//     }
// }

// pass dispatch function from store to props of this component
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: (message) => { dispatch({type: 'ADD_MESSAGE', payload: message})},
//         addTipCount: (amount) => { dispatch({type: 'ADD_TIP_COUNT', payload: amount})}
//     }
// }

export default connect(null, { addMessage, addTipCount })(SendTips);

//export default SendTips;
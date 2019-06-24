import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

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
        const p = this.props;
        // console.log(p);
        e.preventDefault(); //prevent default refreshing
        console.log("Form submitted!", this.state.message);
        //this.props.addTipCount(1);
        //console.log('SendTips.js ' + this.props.tipCount);
        let newTipCount = this.props.tipCount + 1;
        //console.log(newTipCount);
        let messageObj = {key:newTipCount, id:newTipCount.toString(), showDetails: false, received: false, name:"", tea:this.state.message, media:""};
        // console.log(messageObj);
        this.props.addMessage(messageObj);
        //console.log(this.state.message);
        this.setState({message: ''});
        //console.log(this.state.message);
    }
    
    render() {
        //console.log(this.props);
        return(
            <div className="centered reply">
                <form id="message-form" onSubmit = {this.handleSubmit}>
                    <input type ='text' id='msg' onChange={this.handleFormChange} value={this.state.message} placeholder="Double click message to delete"/>
                    <button>Send</button>
                    
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    tipCount: state.storeCount,
    tips: state.storeTips,
});

export default connect(mapStateToProps, { addMessage})(SendTips);

//export default SendTips;
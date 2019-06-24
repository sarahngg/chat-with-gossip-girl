import React, { Component } from 'react';
import MessageDetails from './MessageDetails';
import { connect } from 'react-redux';
import { deleteMessage, toggleDetails } from '../actions';

class Message extends Component {
    handleHover = () => {
        // console.log('Show message details: ' + this.props.showDetails);
        this.props.toggleDetails(this.props.id);
    }
    
    // handleMouseClick = () => {
    //     this.props.toggleDetails(this.props.id);
    // }
    handleDoubleClick = () => {
        console.log('Deleted message id: ' + this.props.id);
        this.props.deleteMessage(this.props.id);
    }
    render() {
      
        //console.log(this.props.received)
        if (this.props.received === true && this.props.media === "") {
            return (
                <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <MessageDetails sentBy={this.props.name} id={this.props.id} showDetails={this.props.showDetails}/>
                <div className="message from" key={this.props.id} onDoubleClick={this.handleDoubleClick}>
                    <li> {this.props.tea} </li>
                </div>   
                </div>
            )
        } 
        if (this.props.received === false && this.props.media === "") {
            return (
                <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <MessageDetails sentBy={this.props.name} id={this.props.id} showDetails={this.props.showDetails}/>
                <div className="message to" key={this.props.id} onDoubleClick={this.handleDoubleClick}>
                    <li> {this.props.tea} </li>
                </div>
                </div>
        )} 
        if (this.props.media !== "") {
            return (
                <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <MessageDetails sentBy={this.props.name} id={this.props.id} showDetails={this.props.showDetails}/>
                <div className="media" key={this.props.id} onDoubleClick={this.handleDoubleClick}>
                    <li> <img src={this.props.media} alt='Sent in by our viewers' /> </li>
                </div>
                </div>
            )
        }
        return (
            <div></div>
        )   
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteMessage: (id) => { dispatch({type: 'DELETE_MESSAGE', id: id})},
//         toggleDetails: (id) => { dispatch({type: 'TOGGLE_MESSAGE_DETAILS', id: id})},
//     }
// }

export default connect(null, { deleteMessage, toggleDetails })(Message);              
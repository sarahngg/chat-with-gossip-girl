import React, { Component } from 'react';

class MessageDetails extends Component {
    render() {
        if (this.props.showDetails === true) {
            if (this.props.sentBy === "") {
                return (
                        <span className="message-details received">Message sent by you | #{this.props.id}</span>
                )
            } else {
                return (
                        <span className="message-details sent">Message sent by <strong>{this.props.sentBy}</strong> | #{this.props.id}</span>
                ) 
            }
            
        }
        return (<div></div>)
    }
}


export default MessageDetails;
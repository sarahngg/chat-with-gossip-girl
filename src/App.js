import React, { Component } from 'react';
import TipLine from './components/TipLine';
import SendTips from './components/SendTips';
// import MessageLoading from './components/MessageLoading';
// import { connect } from 'react-redux';

class App extends Component {
    render() {
        //console.log(this.props);
        const { tips } = this.props;
        return (
            <div className = "App">
                <div className = "header contact centered">
                    <span className = "nav left">&lt; Messages</span>
                    <span className = "contact-name"><strong>Gossip Girl</strong></span>
                    <span className = "nav right">Details</span>
                   
                </div>
                <TipLine tips={tips}/>
                <SendTips />
            </div>
        )
    }
}

export default App;


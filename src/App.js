import React, { Component } from 'react';
import TipLine from './components/TipLine';
import SendTips from './components/SendTips';
// import MessageLoading from './components/MessageLoading';
// import { connect } from 'react-redux';

class App extends Component {

    constructor(props) { // INITIALIZES THE DEFAULT STATE
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() { // FETCH DATA FROM API AND STORE RESPONSE ON this.state.apiResponse
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    
    componentDidMount() {
        this.callAPI();
    }
    

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
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        )
    }
}


export default App;


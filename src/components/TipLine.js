import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { fetchMessages } from '../actions';

class TipLine extends Component {
      
    constructor(props) {
        super(props);
        this.state = { tips: ""};
    }
    
    /*
        React lifecycle method called componentDidMount(),
        that will execute the callAPI() method after the 
        component mounts.
    */
    componentDidMount() {
        this.props.dispatch(fetchMessages());
    }
    render() {
        
        //Destructuring: storing props in variable
        const { tips , isFetching, error } = this.props;
        
        if (error) {
            return <div>Error! {error.message}</div>;
          }
      
        if (isFetching) {
            return <div>Loading...</div>;
        }
        //Cycle through the array "tips" and map each individual "tip"
        //to each div using the html template in return
        
        console.log(this.props);
        //console.log(typeof(tips));
        // if (typeof(tips) !== "undefined") {
        //     console.log(tips);
        //     var parsedTips = JSON.parse(tips);
        //     console.log(parsedTips);
        // }
        console.log({tips});
        // return (
        //     <div className="messages-wrapper">
        //         <ul>
        //         { tips }
        //         </ul>
        //         <p className="Test">API {this.state.tips}</p>
        //     </div>
        // )


        const tipList = tips.map (tip => {
            return(<Message key={tip.key} id={tip.id} showDetails={tip.showDetails} received={tip.received} name={tip.name} tea={tip.tea} media={tip.media}/>)
        })
        return(
            <div className="messages-wrapper">
                <ul>
                { tipList }
                </ul>
                <p className="Test">{this.state.tips}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tips: state.storeTips,
    isFetching: state.isFetching,
    error: state.error
});

export default connect(mapStateToProps)(TipLine);
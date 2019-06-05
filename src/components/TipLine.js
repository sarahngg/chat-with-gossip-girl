import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class TipLine extends Component {

    render() {
        
        //Destructuring: storing props in variable
        const { tips } = this.props;
        
        //Cycle through the array "tips" and map each individual "tip"
        //to each div using the html template in return
        const tipList = tips.map(tip => {
            return(<Message key={tip.key} id={tip.id} showDetails={tip.showDetails} received={tip.received} name={tip.name} tea={tip.tea} media={tip.media}/>)
        })
        return(
            <div className="messages-wrapper">
                <ul>
                { tipList }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        tips: state.storeTips
    }
}

export default connect(mapStateToProps)(TipLine);
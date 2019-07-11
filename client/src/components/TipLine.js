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

        const tipList = tips.map (tip => {
            if (tip !== {}) {
                return(<Message _id={tip._id} key={tip.key} id={tip.id} showDetails={tip.showDetails} received={tip.received} name={tip.name} tea={tip.tea} media={tip.media}/>)
            } else {
                return(<div></div>)
            }
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
    error: state.error,
    intervalIsSet: state.intervalIsSet,
});

// function mapDispatchToProps(dispatch) {

//     return { 
//         dispatch,
//         getDataFromDb: () => {
//             console.log('getDataFromDb');
//             return fetch('http://localhost:3001/api/getData')
//                 .then((data) => data.json())
//                 .then((res) => //this.setState({ data: res.data }));
//                 console.log('getDataFromDb', res.data))
//             }
//      };
//   }

export default connect(mapStateToProps)(TipLine);
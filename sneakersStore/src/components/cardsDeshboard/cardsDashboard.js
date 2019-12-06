import React from 'react';
import {connect} from "react-redux";
import './cardsDeshboard.css'

import {setAvgPrice, setTotalAmount, setTotalCost} from '../../actions';
import {getAvgPrice, getTotalAmount, getTotalCost} from './helpers';

import {ADMIN} from '../../userRoleReducer';

let sneakers = require('../../sneaker.json');


class CardsDashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sneakers: []
        }
    }

    componentDidMount(){
        let lsSneakers = localStorage.getItem('savedSneaker');
        lsSneakers = JSON.parse(lsSneakers);

        if(lsSneakers){
            this.setState({sneakers: lsSneakers});
            this.updateCommonInfo(lsSneakers);
        } else {
            const sneakersFromJson = JSON.stringify(sneakers);
            localStorage.setItem('savedSneaker', sneakersFromJson);
            this.setState({sneakers});
            this.updateCommonInfo(sneakers);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.totalAmount !== this.props.totalAmount && this.props.totalAmount === 0){
        this.setState({sneakers: []})
      }
    }

    updateCommonInfo(items){
      const {setAvgPrice, setTotalAmount, setTotalCost} = this.props;

      setAvgPrice(getAvgPrice(items));
      setTotalAmount(getTotalAmount(items));
      setTotalCost(getTotalCost(items));
    }

    handleDeleteElement = id => {
        this.setState(prevState => ({
          sneakers: prevState.sneakers.filter(sneak => sneak.id !== id),
        }));
        console.log(this.state);
        const store = localStorage.getItem('savedSneaker');
        let savedSneakers = JSON.parse(store);
        savedSneakers = savedSneakers.filter(sneak => sneak.id !== id);
        localStorage.setItem('savedSneaker', JSON.stringify(savedSneakers));
        this.updateCommonInfo(savedSneakers);
      };

   render(){
    const { sneakers } = this.state;
    const { userRole } = this.props;
       return(
          <div className="cardsContainer">
             {sneakers.map(sneak => (
                <div className="mySneak" key={sneak.id}>
                    <h3>{sneak.name}</h3>
                    {userRole === ADMIN &&
                      <button className="deleteButton" onClick={() => { this.handleDeleteElement(sneak.id) }}>
                        <span>X</span>
                      </button>
                    }
                    <img src={sneak.link} alt={sneak.name}></img>
                    <p className="price">Price: {sneak.price}</p>
                    <p className="description">Description: {sneak.body}</p>
                </div>
                )
            )}
         </div>
       )
   }
}

const mapStateToProps = (state) => ({
  totalAmount: state.commonInfo.totalAmount,
  userRole: state.userRole.userRole
});

const mapDispatchToProps = {
  setAvgPrice,
  setTotalAmount,
  setTotalCost
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsDashboard);



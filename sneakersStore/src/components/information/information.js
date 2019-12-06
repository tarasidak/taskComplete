import React from 'react';
import {connect} from 'react-redux';
import './information.css'
import {setAvgPrice, setTotalAmount, setTotalCost} from "../../actions";

const Information = (props) => {
    const {
        avgPrice, totalAmount, totalCost,
        setAvgPrice, setTotalAmount, setTotalCost
    } = props;

    return (
      <div className="information">
          <div className="totalAmount">Total Amount: {totalAmount} </div>
          <div className="totalCost">Total Cost: {totalCost}</div>
          <div className="averagePrice">Average Price: {avgPrice}</div>
          <button className="clear" onClick={() => {
              setAvgPrice(0);
              setTotalAmount(0);
              setTotalCost(0);
              localStorage.setItem('savedSneaker', JSON.stringify([]));
          }}>Clear</button>
      </div>
    )
};

const mapStateToProps = (state) => ({
    avgPrice: state.commonInfo.avgPrice,
    totalAmount: state.commonInfo.totalAmount,
    totalCost: state.commonInfo.totalCost
});

const mapDispatchToProps = {
    setAvgPrice,
    setTotalAmount,
    setTotalCost
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);
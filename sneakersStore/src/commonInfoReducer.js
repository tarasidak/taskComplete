import {
  SET_TOTAL_AMOUNT,
  SET_TOTAL_COST,
  SET_AVERAGE_PRICE
} from './constants';

const initState = {
  avgPrice: 0,
  totalAmount: 0,
  totalCost: 0
};

export default function commonInfoReducer(state = initState, action) {
  switch (action.type) {
    case SET_AVERAGE_PRICE:
      return {...state, avgPrice: action.avgPrice};
    case SET_TOTAL_COST:
      return {...state, totalCost: action.totalCost};
    case SET_TOTAL_AMOUNT:
      return {...state, totalAmount: action.totalAmount};
    default:
      return state
  }
}
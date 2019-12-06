import {SET_AVERAGE_PRICE, SET_TOTAL_AMOUNT, SET_TOTAL_COST} from './constants';

export function setAvgPrice(avgPrice) {
  return {
    type: SET_AVERAGE_PRICE,
    avgPrice
  }
}

export function setTotalAmount(totalAmount) {
  return {
    type: SET_TOTAL_AMOUNT,
    totalAmount
  }
}

export function setTotalCost(totalCost) {
  return {
    type: SET_TOTAL_COST,
    totalCost
  }
}
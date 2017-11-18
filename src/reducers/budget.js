import {combineReducers} from 'redux';
import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmTypes';
import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const profit = (state = 0, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return state + action.payload.price;
    default:
      return state;
  }
};

const marketExpanse = (state = 0, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return state + 20;
    default:
      return state;
  }
};

const farmExpanse = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return state + 100;
    default:
      return state;
  }
};

const deliveryExpanse = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return state + 20;
    default:
      return state;
  }
};

export default combineReducers({
  profit,
  marketExpanse,
  farmExpanse,
  deliveryExpanse
});

export const getProfit = state => state.profit;
export const getMarket = state => state.marketExpanse;
export const getFarm = state => state.farmExpanse;
export const getDelivery = state => state.deliveryExpanse;
export const getTotal = s =>
  s.profit - s.marketExpanse - s.farmExpanse - s.deliveryExpanse;

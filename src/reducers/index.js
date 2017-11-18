import {combineReducers} from 'redux';
import Market from './market';
import Farm from './farm';
import Budget from './budget';

export default combineReducers({
  Market,
  Farm,
  Budget
});

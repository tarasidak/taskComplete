import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import userRoleReducer from './userRoleReducer';
import commonInfoReducer from './commonInfoReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  userRole: userRoleReducer,
  commonInfo: commonInfoReducer
})
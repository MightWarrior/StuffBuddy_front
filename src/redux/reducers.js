import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

const Reducers = combineReducers({
  authReducer,
});

export default Reducers;

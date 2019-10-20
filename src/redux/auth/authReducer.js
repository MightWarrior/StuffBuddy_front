import { handleActions } from 'redux-actions';
import {
  loginFailure, loginSuccess,
  logoutFailure, logoutSuccess,
  registrationSuccess, registrationFailure,
  requestPending,
} from './authActions';

const initialState = {
  isLogged: false,
  user: null,
  pending: false,
  isError: false,
};

const authReducer = handleActions({
  [requestPending]: (state) => ({
    ...state,
    pending: true,
  }),
  [loginFailure]: (state) => ({
    ...state,
    pending: false,
    isError: true,
  }),
  [loginSuccess]: (state, action) => ({
    ...state,
    pending: false,
    isError: false,
    isLogged: true,
    user: action.payload,
  }),
  [logoutFailure]: (state) => ({
    ...state,
    pending: false,
    isError: true,
  }),
  [logoutSuccess]: (state) => ({
    ...state,
    pending: false,
    isError: false,
    user: null,
    isLogged: false,
  }),
  [registrationFailure]: (state) => ({
    ...state,
    pending: false,
    isError: true,
  }),
  [registrationSuccess]: (state, action) => ({
    ...state,
    pending: false,
    isError: false,
    isLogged: true,
    user: action.payload,
  }),
}, initialState);

export default authReducer;

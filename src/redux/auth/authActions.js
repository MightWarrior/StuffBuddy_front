import { createAction } from 'redux-actions';
import {
  LOGIN_FAILURE, LOGIN_SUCCESS,
  LOGOUT_FAILURE, LOGOUT_SUCCESS,
  REGISTRATION_FAILURE, REGISTRATION_SUCCESS,
  REQUEST_PENDING,
} from './authActionTypes';
import { login, logout, register } from '../../services/Fetch';

export const loginFailure = createAction(LOGIN_FAILURE);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const requestPending = createAction(REQUEST_PENDING);
export const registrationSuccess = createAction(REGISTRATION_SUCCESS);
export const registrationFailure = createAction(REGISTRATION_FAILURE);

export const userLogin = (user) => (dispatch) => {
  dispatch(requestPending());

  login('login', user)
    .then((res) => dispatch(loginSuccess(res)))
    .catch(() => loginFailure());
};

export const userLogout = () => (dispatch) => {
  dispatch(requestPending);

  logout('signout')
    .then(() => dispatch(logoutSuccess()))
    .catch(() => dispatch(logoutFailure()));
};

export const userRegister = (user) => (dispatch) => {
  dispatch(requestPending);

  register('register', user)
    .then((res) => dispatch(registrationSuccess(res)))
    .catch(() => dispatch(registrationFailure()));
};

import {
  FETCH_LOGIN_USER,
  FETCH_LOGIN_USER_SUCCESS,
  FETCH_LOGIN_USER_ERROR,
  FETCH_LOGOUT_USER,
  FETCH_LOGOUT_USER_SUCCESS,
  FETCH_LOGOUT_USER_ERROR,
} from '../actions/UserActions';

const initialState = {
  loginLoading: false,
  logoutLoading: false,

  loginError: false,
  logoutError: false,

  authenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN_USER:
      return {
        ...state,
        loginLoading: true,
        loginError: false,
      };

    case FETCH_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        authenticated: true,
      };

    case FETCH_LOGIN_USER_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: true,
      };

    case FETCH_LOGOUT_USER:
      return {
        ...state,
        logoutLoading: true,
        logoutError: false,
      };

    case FETCH_LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        authenticated: false,
      };

    case FETCH_LOGOUT_USER_ERROR:
      return {
        ...state,
        logoutLoading: false,
        logoutError: true,
      };

    default:
      return state;
  }
}
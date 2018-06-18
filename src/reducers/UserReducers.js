import {
  SET_TOKEN,

  FETCH_LOGIN_USER,
  FETCH_LOGIN_USER_SUCCESS,
  FETCH_LOGIN_USER_ERROR,

  FETCH_VERIFY_USER,
  FETCH_VERIFY_USER_SUCCESS,
  FETCH_VERIFY_USER_ERROR,

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
  token: '',
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

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
        token: action.payload.token,
        user: {
          email: action.payload.user.email,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          avatar: action.payload.user.avatar,
          isAdmin: action.payload.user.isAdmin,
        }
      };

    case FETCH_LOGIN_USER_ERROR:
      return {
        ...state,
        loginLoading: false,
      };

    case FETCH_VERIFY_USER:
      return {
        ...state,
        verifyLoading: true,
      };

    case FETCH_VERIFY_USER_SUCCESS:
      return {
        ...state,
        verifyLoading: false,
        authenticated: true,
        user: {
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          avatar: action.payload.avatar,
          isAdmin: action.payload.isAdmin,
        }
      };

    case FETCH_VERIFY_USER_ERROR:
      return {
        ...state,
        verifyLoading: false,
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
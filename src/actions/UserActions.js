import moment from 'moment';

import {
  API_BASE
} from "../config/app";

export const FETCH_LOGIN_USER = '@@USER//FETCH_LOGIN';
export const FETCH_LOGIN_USER_SUCCESS = '@@USER//FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_USER_ERROR = '@@USER//FETCH_LOGIN_ERROR';
export const FETCH_LOGOUT_USER = '@@USER//FETCH_LOGOUT';
export const FETCH_LOGOUT_USER_SUCCESS = '@@USER//FETCH_LOGOUT_SUCCESS';
export const FETCH_LOGOUT_USER_ERROR = '@@USER//FETCH_LOGOUT_ERROR';

export const loginUser = (email, password) => async (dispatch) => {
  dispatch({
    type: FETCH_LOGIN_USER
  });

  try {
    const data = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());

    localStorage.setItem('auth', JSON.stringify({
      token: data.token,
      expires: moment().add(data.expires_in, 'seconds').format(),
    }));

    dispatch({
      type: FETCH_LOGIN_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LOGIN_USER_ERROR,
      payload: error,
    });
  }
}
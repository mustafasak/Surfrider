import {
  API_BASE
} from "../config/app";

export const FETCH_MY_CHAPTERS = '@@CHAPTER//FETCH_MY_CHAPTERS';
export const FETCH_MY_CHAPTERS_SUCCESS = '@@CHAPTER//FETCH_MY_CHAPTERS_SUCCESS';
export const FETCH_MY_CHAPTERS_ERROR = '@@CHAPTER//FETCH_MY_CHAPTERS_ERROR';

export const fetchMyChapters = () => async (dispatch) => {
  dispatch({
    type: FETCH_MY_CHAPTERS
  });

  try {
    const data = await fetch(`${API_BASE}/chapters/me`)
      .then(response => response.json());

    dispatch({
      type: FETCH_MY_CHAPTERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const data = await error.json();

    dispatch({
      type: FETCH_MY_CHAPTERS_ERROR,
      payload: data,
    });
  }
}
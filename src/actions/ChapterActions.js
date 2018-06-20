import {
  API_BASE
} from "../config/app";

export const FETCH_MY_CHAPTERS = '@@CHAPTER//FETCH_MY_CHAPTERS';
export const FETCH_MY_CHAPTERS_SUCCESS = '@@CHAPTER//FETCH_MY_CHAPTERS_SUCCESS';
export const FETCH_MY_CHAPTERS_ERROR = '@@CHAPTER//FETCH_MY_CHAPTERS_ERROR';

export const FETCH_CREATE_CHAPTER = '@@CHAPTER//FETCH_CREATE_CHAPTER';
export const FETCH_CREATE_CHAPTER_SUCCESS = '@@CHAPTER//FETCH_CREATE_CHAPTER_SUCCESS';
export const FETCH_CREATE_CHAPTER_ERROR = '@@CHAPTER//FETCH_CREATE_CHAPTER_ERROR';

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

export const createChapter = (name, slug, address, postalCode, city, country) => async (dispatch) => {
  dispatch({
    type: FETCH_CREATE_CHAPTER
  });

  try {
    const data = await fetch(`${API_BASE}/chapters`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        slug,
        address,
        postalCode,
        city,
        country
      }),
    }).then(response => response.json());

    console.log(data)

    dispatch({
      type: FETCH_CREATE_CHAPTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const data = await error.json();

    dispatch({
      type: FETCH_CREATE_CHAPTER_ERROR,
      payload: data,
    });
  }
}
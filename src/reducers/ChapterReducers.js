import {
  FETCH_MY_CHAPTERS,
  FETCH_MY_CHAPTERS_SUCCESS,
  FETCH_MY_CHAPTERS_ERROR,
} from '../actions/ChapterActions';

const initialState = {
  chaptersLoading: false,

  chaptersError: false,

  chapters: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MY_CHAPTERS:
      return {
        ...state,
        chaptersLoading: true,
        chaptersError: false,
      };

    case FETCH_MY_CHAPTERS_SUCCESS:
      return {
        ...state,
        chaptersLoading: false,
        chapters: action.payload,
      };

    case FETCH_MY_CHAPTERS_ERROR:
      return {
        ...state,
        chaptersLoading: false,
        chaptersError: false,
      };

    default:
      return state;
  }
}
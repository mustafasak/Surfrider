import {
  FETCH_MY_CHAPTERS,
  FETCH_MY_CHAPTERS_SUCCESS,
  FETCH_MY_CHAPTERS_ERROR,

  FETCH_CHAPTER_USERS,
  FETCH_CHAPTER_USERS_SUCCESS,
  FETCH_CHAPTER_USERS_ERROR,

  FETCH_CREATE_CHAPTER,
  FETCH_CREATE_CHAPTER_SUCCESS,
  FETCH_CREATE_CHAPTER_ERROR,
} from '../actions/ChapterActions';
import {
  LOGOUT_USER
} from '../actions/UserActions';

const initialState = {
  chaptersLoading: false,
  chapterUsersLoading: false,
  createChapterLoading: false,

  chaptersError: false,
  chapterUsersError: false,
  createChapterError: false,

  createChapterErrors: {},
  createdChapter: null,

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

    case FETCH_CHAPTER_USERS:
      return {
        ...state,
        chapterUsersLoading: true,
        chapterUsersError: false,
      };

    case FETCH_CHAPTER_USERS_SUCCESS:
      return {
        ...state,
        chapterUsersLoading: false,
        chapters: state.chapters.map(chapter => {
          if (chapter._id === action.payload.id) {
            return {
              ...chapter,
              users: action.payload.users,
            }
          }

          return chapter;
        }),
      };

    case FETCH_CHAPTER_USERS_ERROR:
      return {
        ...state,
        chapterUsersLoading: false,
        chapterUsersError: false,
      };

    case FETCH_CREATE_CHAPTER:
      return {
        ...state,
        createChapterLoading: true,
        createChapterError: false,
        createChapterErrors: {},
        createdChapter: null,
      };

    case FETCH_CREATE_CHAPTER_SUCCESS:
      return {
        ...state,
        createChapterLoading: false,
        createdChapter: action.payload,
        chapters: [
          ...state.chapters,
          action.payload
        ]
      };

    case FETCH_CREATE_CHAPTER_ERROR:
      return {
        ...state,
        createChapterLoading: false,
        createChapterError: false,
        createChapterErrors: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
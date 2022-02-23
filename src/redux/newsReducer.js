import { types } from './types';

const initialState = {
  newsIds: [],
  news: [],
  currentItem: {},
  comments: [],
  kidComments: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_IDS_SUCCESS:
      return { ...state, newsIds: action.payload };
    case types.GET_NEWS_SUCCESS:
      return { ...state, news: [action.payload, ...state.news], isLoading: false };
    case types.GET_CURRENT_ITEM_SUCCESS:
      return { ...state, currentItem: action.payload};
    case types.GET_COMMENTS_SUCCESS:
      return { ...state, comments: [action.payload, ...state.comments]};
    case types.GET_KID_COMMENTS_SUCCESS:
      return { ...state, kidComments: [action.payload, ...state.kidComments]};
    default: return state;
  };
};
import { types } from './types';

const initialState = {
  newsIds: [],
  news: [],
  currentItem: {},
  comment: [],
  isLoading: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_IDS_SUCCESS:
      return { ...state, newsIds: action.payload };
    case types.GET_NEWS_SUCCESS:
      return { ...state, news: [action.payload, ...state.news], isLoading: false };
    case types.GET_CURRENT_ITEM_SUCCESS:
      return { ...state, currentItem: action.payload};
    case types.GET_COMMENT_SUCCESS:
      return { ...state, comment: [action.payload, ...state.comment]};
    default: return state;
  };
};
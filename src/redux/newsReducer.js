import { types } from './types';

const initialState = {
  newsIds: [],
  news: [],
  isLoading: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_IDS_SUCCESS:
      return { ...state, newsIds: action.payload };
    case types.GET_NEWS_SUCCESS:
      return { ...state, news: [action.payload, ...state.news], isLoading: false };
    default: return state;
  };
};
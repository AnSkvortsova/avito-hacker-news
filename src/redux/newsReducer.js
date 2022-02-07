import { GET_NEWS_IDS, GET_NEWS } from './types';
const initialState = {
  newsIds: [],
  news: {}
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_IDS:
      return { ...state, newsIds: action.payload };
    case GET_NEWS:
      return { ...state, news: action.payload };
    default: return state;
  };
};
import { types } from './types';
import * as api from '../utils/api';
import { MAX_NEWS } from '../utils/constance';

export function getNewsIds() {
  return dispatch => {
    return api.getNewsIds()
    .then((data) => {
      const newsIds = data.slice(0, MAX_NEWS)
      dispatch({type: types.GET_NEWS_IDS_SUCCESS, payload: newsIds});
    })
    .catch((err) => {
      dispatch({type: types.GET_NEWS_IDS_FAILURE, payload: err});
    })
  };
};

export function getNews(newsId) {
  return dispatch => {
    return api.getNewsData(newsId)
    .then((data) => {
      dispatch({type: types.GET_NEWS_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: types.GET_NEWS_FAILURE, payload: err});
    })
  };
};

export function getCurrentItem(currentId) {
  return dispatch => {
    return api.getCurrentItem(currentId)
    .then((data) => {
      dispatch({type: types.GET_CURRENT_ITEM_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: types.GET_CURRENT_ITEM_FAILURE, payload: err})
    })
  };
};

export function getComment(commentId) {
  return dispatch => {
    return api.getComment(commentId)
    .then((data) => {
      dispatch({type: types.GET_COMMENT_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: types.GET_COMMENT_FAILURE, payload: err})
    })
  }
};
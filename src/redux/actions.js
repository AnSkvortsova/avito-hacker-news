import { types } from './types';
import * as api from '../utils/api';
import { MAX_NEWS } from '../utils/constance';

export function showLoader() {
  return {
    type: types.SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: types.HIDE_LOADER
  }
}

export function getNewsIds() {
  return dispatch => {
    dispatch(showLoader())
    return api.getNewsIds()
    .then((data) => {
      const newsIds = data.slice(0, MAX_NEWS)
      dispatch({type: types.GET_NEWS_IDS_SUCCESS, payload: newsIds});
    })
    .catch((err) => {
      dispatch({type: types.GET_NEWS_IDS_FAILURE, payload: err});
    })
    .finally(() => {
      dispatch(hideLoader())
    })
  };
};

export function getNews(newsId) {
  return dispatch => {
    dispatch(showLoader())
    return api.getNewsData(newsId)
    .then((data) => {
      dispatch({type: types.GET_NEWS_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: types.GET_NEWS_FAILURE, payload: err});
    })
    .finally(() => {
      dispatch(hideLoader())
    })
  };
};

export function getCurrentItem(currentId) {
  return dispatch => {
    dispatch(showLoader())
    return api.getNewsData(currentId)
    .then((data) => {
      dispatch({type: types.GET_CURRENT_ITEM_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: types.GET_CURRENT_ITEM_FAILURE, payload: err})
    })
    .finally(() => {
      dispatch(hideLoader())
    })
  };
};

export function getComments(commentId) {
  return dispatch => {
    dispatch(showLoader())
    return api.getNewsData(commentId)
    .then((data) => {
      let comment;
      if (!!data.text) {
        comment = data
      } else {
        return
      }
      dispatch({type: types.GET_COMMENTS_SUCCESS, payload: comment})
    })
    .catch((err) => {
      dispatch({type: types.GET_COMMENTS_FAILURE, payload: err})
    })
    .finally(() => {
      dispatch(hideLoader())
    })
  }
};

export function getKidComments(commentId) {
  return dispatch => {
    dispatch(showLoader())
    return api.getNewsData(commentId)
    .then((data) => {
      dispatch({type: types.GET_KID_COMMENTS_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: types.GET_KID_COMMENTS_FAILURE, payload: err})
    })
    .finally(() => {
      dispatch(hideLoader())
    })
  }
};

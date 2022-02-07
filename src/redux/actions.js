import { GET_NEWS_IDS, GET_NEWS } from './types';
import * as api from '../utils/api';

export function getNewsIds() {
  return dispatch => {
    api.getNewsIds()
    .then((data) => {
      dispatch({ type: GET_NEWS_IDS, payload: data})
    })
    .catch((err) => {console.log(err)})
  }
};

export function getNews(newsId) {
  return dispatch => {
    api.getNewsData(newsId)
    .then((data) => {
      dispatch({ type: GET_NEWS, payload: data})
    })
    .catch((err) => {console.log(err)})
  }
};
import { API_BASE_URL } from './constance';

const checkResult = (response) => {
  if(response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`)
};

export const getNewsData = (newsId) => {
  return fetch(`${API_BASE_URL}/item/${newsId}.json?print=pretty`, {
    method: 'GET',
    headers: {
     'Content-Type': 'application/json',
    },
  }).then((response) => checkResult(response))
};

export const getNewsIds = () => {
  return fetch(`${API_BASE_URL}/newstories.json?print=pretty`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => checkResult(response))
};


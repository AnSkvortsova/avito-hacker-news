import React, { useCallback, useEffect, useState } from 'react';

import { getNewsData } from '../../utils/api';

export function News(props) {
  const [news, setNews] = useState({});

  const getNews = useCallback(
    () => {
    getNewsData(props.newsId)
    .then((data) => {setNews(data)})
    .catch((err) => {console.log(err)})
    }, [props.newsId]
  );

  useEffect(() => {
    getNews();
  }, [getNews]);

  console.log('news ', news)

  return news && news.title ? (
    <div className='news'>
      <h1 className='news__title'>{news.title}</h1>
      <p className='news__score'>Рейтинг: {news.score}</p>
      <p className='news__author'>Автор: {news.by}</p>
      <p className='news__date'>Дата: {news.time}</p>
    </div>
  ) : null;
};
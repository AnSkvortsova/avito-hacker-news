import React, { useCallback, useEffect, useState } from 'react';

import { getNewsData } from '../../utils/api';
import { getTime } from '../../utils/getTime';

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

  return news && news.title ? (
    <div className='news'>
      <h1 className='news__title'>{news.title}</h1>
      <div className='news__about'>
        <p className='news__text'>author: {news.by}</p>
        <div className='news__addition'>
          <p className='news__text'>rating: {news.score}</p>
          <p className='news__text'>posted: {getTime(news.time)}</p>
        </div>
      </div>
    </div>
  ) : null;
};
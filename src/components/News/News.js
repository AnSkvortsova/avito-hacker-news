import React, { useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getNews } from '../../redux/actions';
import { getTime } from '../../utils/getTime';
import { getNewsData } from '../../utils/api';

export function News(props) {
  //const dispatch = useDispatch();
  //const news = useSelector(state => state.news.news)
  

  const [news, setNews] = useState({});
  console.log('news ', news)

  const getNews = useCallback(
    () => {
    getNewsData(props.newsId)
    .then((data) => {setNews(data)})
    .catch((err) => {console.log(err)})
    }, [props.newsId]
  );

  useEffect(() => {
    getNews()
   // dispatch(getNews(props.newsId))
    console.log('newsId ', props.newsId)
  }, []);

  return news && news.title ? (
    <Link to='/news' className='news'>
      <h1 className='news__title'>{news.title}</h1>
      <div className='news__about'>
        <p className='news__text'>author: {news.by}</p>
        <div className='news__addition'>
          <p className='news__text'>rating: {news.score}</p>
          <p className='news__text'>posted: {getTime(news.time)}</p>
        </div>
      </div>
    </Link>
  ) : null;
};
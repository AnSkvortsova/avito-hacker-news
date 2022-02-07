import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { News } from '../News/News';
import { getNewsIds } from '../../redux/actions';
import { MAX_NEWS } from '../../utils/constance';

const NewsList = () => {
  const dispatch = useDispatch();
  const newsIds = useSelector(state => state.news.newsIds)

  useEffect(() => {
    dispatch(getNewsIds());
    console.log('useEffect is here')
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getNewsIds());
      console.log('update');
    }, 60000);
    return () => clearTimeout(timer);
  });

  console.log('newsIds ', newsIds)
  return (
    <section className='newsList'>
      <header className='newsList__header'>
        <h1 className='newsList__title'>Hacker News</h1>
        <button 
        className='newsList__button' 
        type='button' 
        onClick={() => dispatch(getNewsIds())}
        aria-label='update'>Update</button>
      </header>

      {newsIds.slice(0, MAX_NEWS).map((newsId) => (
        <News
        key = {newsId}
        newsId = {newsId} />
      ))}
    </section>
  );
};

export default NewsList;
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { News } from '../News/News';
import { getNews, getNewsIds } from '../../redux/actions';

import { MAX_NEWS } from '../../utils/constance';

export function NewsList() {
  const dispatch = useDispatch();
  const newsIds = useSelector(state => state.news.newsIds);
  const news = useSelector(state => state.news.news)

  //получаем все id
  useEffect(() => {
    dispatch(getNewsIds());
  }, [dispatch]);

  //обновляем id
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getNewsIds());
    }, 60000);
    return () => clearTimeout(timer);
  });

  //получаем массив новостей
  const getNewsArray = useCallback(
    () => {
      const updateNewsIds = [];
      const oldNewsId = [];
      
      if (news.length === 0) {
          newsIds.reverse().map((newsId) => (
            dispatch(getNews(newsId))
        ));
      } else if (news.length === MAX_NEWS) {
        news.forEach(element => {
          oldNewsId.push(element.id);
        });
        newsIds.forEach(element => {
          if (!~oldNewsId.indexOf(element)) {
            updateNewsIds.unshift(element);
            news.pop();
          };
        });
        console.log('updateNewsId ', updateNewsIds)
        updateNewsIds.map((newsId) => (
          dispatch(getNews(newsId))
        ));
      };
      return news.sort((a, b) => b.time - a.time);
  }, [dispatch, news, newsIds]);

  useEffect(() => {
    getNewsArray();
  }, [getNewsArray]);

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

      {news.map((item) => (
        <News
        key = {item.id}
        news = {item} />
      ))}
    </section>
  );
};

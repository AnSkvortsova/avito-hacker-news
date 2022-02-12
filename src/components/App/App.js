import React, { useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { NewsList } from '../NewsList/NewsList';
import { NewsPage } from '../NewsPage/NewsPage';

import { getNews, getNewsIds, getComment } from '../../redux/actions';

import { MAX_NEWS } from '../../utils/constance';


function App() {
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

  const getCommentsArray = useCallback(
    (commentsArray) => {
      if(commentsArray === undefined) {
        return;
      }
      commentsArray.map((commentId) => (
        dispatch(getComment(commentId))
      ));
    },
  [dispatch]);

  useEffect(() => {
    getCommentsArray();
  }, [getCommentsArray]);
  
  return (
    <div className='app'>
      <Route exact path='/'>
        <NewsList
        news = {news}
        onClickButton = {() => dispatch(getNewsIds())} />
      </Route>
      <Route path='/news/:id'>
        <NewsPage
        onGetCommentsArray = {getCommentsArray} />
      </Route>
    </div>
  );
}

export default App;

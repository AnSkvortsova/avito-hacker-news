import React from 'react';

import { News } from '../News/News';
import { MAX_NEWS } from '../../utils/constance';

export function NewsList(props) {

  return (
    <section className='newsList'>
      <header className='newsList__header'>
        <h1 className='newsList__title'>Hacker News</h1>
        <button 
        className='newsList__button' 
        type='button' 
        onClick={props.update}
        aria-label='update'>Update</button>
      </header>

      {props.newsIds.slice(0, MAX_NEWS).map((newsId) => (
        <News
        key = {newsId}
        newsId = {newsId}
         />
      ))}
    </section>
  );
};
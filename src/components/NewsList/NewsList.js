import React from 'react';

import { News } from '../News/News';

export function NewsList(props) {

  return (
    <section className='newsList'>
      <h1 className='newsList__title'>Hacker News</h1>
      {props.newsIds.map((newsId) => (
        <News
        key = {newsId}
        newsId = {newsId}
         />
      ))}
    </section>
  );
};
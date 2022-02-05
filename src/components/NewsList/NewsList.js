import React from 'react';

import { News } from '../News/News';

export function NewsList(props) {
  
  return (
    <section className='newsList'>
      {props.newsIds.map((newsId) => (
        <News
        key = {newsId}
        newsId = {newsId}
         />
      ))}
    </section>
  );
};
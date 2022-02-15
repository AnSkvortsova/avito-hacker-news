import React from 'react';

import { News } from '../News/News';

export function NewsList(props) {
  function handleClickButton() {
    props.onClickButton();
  };

  return (
    <section className='newsList'>
      <header className='newsList__header'>
        <h1 className='newsList__title'>Hacker News</h1>
        <button 
        className='newsList__button' 
        type='button' 
        onClick={handleClickButton}
        aria-label='update'>Update</button>
      </header>

      {props.news.map((item) => (
        <News
        key = {item.id}
        news = {item} />
      ))}
    </section>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { News } from '../News/News';
import { Preloader } from '../Preloader/Preloader';


export function NewsList(props) {
  const isLoading = useSelector(state => state.app.isLoading);

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

      {isLoading ? <Preloader /> : null}

      {props.news.map((item) => (
        <News
        key = {item.id}
        news = {item} />
      ))}
    </section>
  );
};

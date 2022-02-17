import React from 'react';
import { useSelector } from 'react-redux';

import { getTime } from '../../utils/getTime';
import { CommentList } from '../CommentList/CommentList';

export function NewsPage(props) {
  const item = useSelector(state => state.news.currentItem);

  return (
    <section className='newsPage'>
      <a className='newsPage__link' href={item.url}>
        <h1 className='newsPage__title'>{item.title}</h1>
      </a>

      <div className='newsPage__info'>
        <ul className='newsPage__about'>
          <li className='newsPage__text'>author: {item.by}</li>
          <li className='newsPage__text'>posted: {getTime(item.time)}</li>
          <li className='newsPage__text'>comment count: {item.descendants}</li>
        </ul>

        <div className='newsPage__buttons'>
          <button 
          className='newsList__button' 
          type='button' 
          aria-label='update'>Update</button>
          <button 
          className='newsList__button' 
          type='button' 
          aria-label='update'>Back</button>
        </div>
      </div>
      
      {item.kids !== undefined 
      ? <CommentList
        onGetCommentsArray = {props.onGetCommentsArray}
        onGetKidCommentsArray = {props.onGetKidCommentsArray} />
      : null}
    </section>
  );
};
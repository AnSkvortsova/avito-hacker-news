import React from 'react';
import { Link } from 'react-router-dom';

import { getTime } from '../../utils/getTime';

export function News(props) {
  return props.news && props.news.title ? (
    <Link to='/news' className='news'>
      <h1 className='news__title'>{props.news.title}</h1>
      <div className='news__about'>
        <p className='news__text'>author: {props.news.by}</p>
        <div className='news__addition'>
          <p className='news__text'>rating: {props.news.score}</p>
          <p className='news__text'>posted: {getTime(props.news.time)}</p>
        </div>
      </div>
    </Link>
  ) : null;
};
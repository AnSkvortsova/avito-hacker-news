import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getTime } from '../../utils/getTime';
import { getCurrentItem } from '../../redux/actions';

export function News(props) {
  const dispatch = useDispatch();

  return props.news && props.news.title ? (
    <Link to={`/news/${props.news.id}`} className='news'>
      <div className='news__wrapper' onClick={() => dispatch(getCurrentItem(props.news.id))}>
        <h1 className='news__title'>{props.news.title}</h1>
        <div className='news__about'>
          <p className='news__text'>author: {props.news.by}</p>
          <div className='news__addition'>
            <p className='news__text'>rating: {props.news.score}</p>
            <p className='news__text'>posted: {getTime(props.news.time)}</p>
          </div>
        </div>
      </div>
    </Link>
  ) : null;
};
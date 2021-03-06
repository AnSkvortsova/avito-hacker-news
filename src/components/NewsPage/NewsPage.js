import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentItem } from '../../redux/actions';
import { getTime } from '../../utils/getTime';
import { CommentList } from '../CommentList/CommentList';
import { Preloader } from '../Preloader/Preloader';

export function NewsPage(props) {
  const dispatch = useDispatch();
  const item = useSelector(state => state.news.currentItem);
  const isLoading = useSelector(state => state.app.isLoading);

  function handleUpdateButton() {
    dispatch(getCurrentItem(item.id));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getCurrentItem(item.id));
    }, 60000);
    return () => clearTimeout(timer);
  });

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
          onClick={handleUpdateButton}
          aria-label='update'>Update</button>
          <Link to={`/`} className='newsPage__linkButton'>Back</Link>
        </div>
      </div>

      {isLoading ? <Preloader /> : null}
      
      {item.kids !== undefined 
      ? <CommentList
        onGetCommentsArray = {props.onGetCommentsArray}
        onGetKidCommentsArray = {props.onGetKidCommentsArray} />
      : null}
    </section>
  );
};
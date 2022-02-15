import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getTime } from '../../utils/getTime';

export function NewsPage(props) {
  const item = useSelector(state => state.news.currentItem);
  const comments = useSelector(state => state.news.comments);
  const kidComments = useSelector(state => state.news.kidComments);

  const getComments = useCallback(
    () => {
      if(item.kids === undefined) {
        return;
      }
      props.onGetCommentsArray(item.kids)
    },
  [item.kids]);

  useEffect(() => {
    getComments()
  }, [getComments]);

  function handleCommentClick(kidCommentsIdArray) {
    if(kidCommentsIdArray === undefined) {
      return;
    }
    props.onGetKidCommentsArray(kidCommentsIdArray)
  };

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
      <ul className='newsPage__comments'>
        {comments.map((el) => (
        <li className='newsPage__comment' key={el.id} onClick={() => handleCommentClick(el.kids)}>{el.text}
          <ul className='newsPage__comments'>
            {kidComments.map((el) => (
              <li className='newsPage__comment newsPage__comment_kid' key={el.id} onClick={() => handleCommentClick(el.kids)}>{el.text}
                <ul className='newsPage__comments'>
                  {kidComments.map((el) => (
                    <li className='newsPage__comment newsPage__comment_kid' key={el.id} onClick={() => handleCommentClick(el.kids)}>{el.text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        ))}
      </ul>
    </section>
  );
};
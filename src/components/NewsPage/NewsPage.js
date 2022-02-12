import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTime } from '../../utils/getTime';
import { getComment } from '../../redux/actions';

export function NewsPage(props) {
  const dispatch = useDispatch;
  const item = useSelector(state => state.news.currentItem);
  const comment = useSelector(state => state.news.comment);

  //const getCommentArray = useCallback(
  //  () => {
  //    if(item.kids === undefined) {
  //      return;
  //    }
  //    const commentIds = item.kids;
  //    commentIds.map((commentId) => (
  //      dispatch(getComment(commentId))
  //    ));
  //  },
  //[dispatch, item.kids]);
//
  //useEffect(() => {
  //  getCommentArray();
  //}, [getCommentArray]);

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

  console.log('comment ', comment)
  console.log('item ', item)

  function handleCommentClick() {
    console.log('click')
  }

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
        {comment.map((el) => (
        <li className='newsPage__comment' key={el.id} onClick={handleCommentClick}>{el.text}</li>
      ))}
      </ul>
      
    </section>
  );
};
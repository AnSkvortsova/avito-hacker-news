import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

export function CommentList(props) {
  const item = useSelector(state => state.news.currentItem);
  const comments = useSelector(state => state.news.comments);
  const kidComments = useSelector(state => state.news.kidComments);


  const getComments = useCallback(
    () => {
      const oldCommentIds = [];
      const newCommentIds = [];
      if(item.kids === undefined) {
        comments.length = 0;
        return;
      } else if (comments.length !== 0) {
        comments.forEach(element => {
          if (item.id !== element.parent) {
            return comments.length = 0;
          };
          oldCommentIds.push(element.id);
        });
        item.kids.forEach(element => {
          if(!oldCommentIds.includes(element)) {
            newCommentIds.push(element);
          };
        });
        return props.onGetCommentsArray(newCommentIds);
      }
      props.onGetCommentsArray(item.kids);
    },
  [item.kids]);

  useEffect(() => {
    getComments()
  }, [getComments]);

  function handleCommentClick(kidCommentIdsArray, commentId) {
    const oldCommentIds = [];
    const newCommentIds = [];
    if(kidCommentIdsArray === undefined) {
      return;
    } else if (kidComments.length !== 0) {
      kidComments.forEach(element => {
        oldCommentIds.push(element.id);
      });
      kidCommentIdsArray.forEach(element => {
        if(!oldCommentIds.includes(element)) {
          newCommentIds.push(element)
        }
      })
      return props.onGetKidCommentsArray(newCommentIds);
    };
    props.onGetKidCommentsArray(kidCommentIdsArray);
  };

  console.log('Kid comments ', kidComments)
  console.log('comments ', comments)

  return(
      <ul className='comments'>
        {comments.map((el) => (
          item.id !== el.parent ? null :
          <li 
          className='comments__li' 
          key={el.id} 
          onClick={() => handleCommentClick(el.kids, el.id)}>
            <div className='comments__item'>{el.text}</div>
            {kidComments.map((elem) => (
              el.id !== elem.parent ? null :
              <li 
              className='comments__li' 
              key={elem.id} 
              onClick={() => handleCommentClick(elem.kids, elem.id)}>
                <div className='comments__item comments__item_kid'>{elem.text}</div>
              </li>
            ))}
          </li>
          ))}
      </ul>
  );
};
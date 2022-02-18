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

  function handleCommentClick(kidCommentIdsArray) {
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

  return(
      <ul className='comments'>
        {comments.map((element) => (
          item.id !== element.parent ? null :
          <li 
          className='comments__li' 
          key={element.id} 
          onClick={() => handleCommentClick(element.kids)}>
            <div className='comments__item'>{element.text}</div>
            {kidComments.map((elementL) => (
              element.id !== elementL.parent ? null :
              <li 
              className='comments__li' 
              key={elementL.id} 
              onClick={() => handleCommentClick(elementL.kids)}>
                <div className='comments__item comments__item_kidL'>{elementL.text}</div>
                {kidComments.map((elementM) => (
                  elementL.id !== elementM.parent ? null :
                  <li 
                  className='comments__li' 
                  key={elementM.id} 
                  onClick={() => handleCommentClick(elementM.kids)}>
                    <div className='comments__item comments__item_kidM'>{elementM.text}</div>
                    {kidComments.map((elementS) => (
                      elementM.id !== elementS.parent ? null :
                      <li 
                      className='comments__li' 
                      key={elementS.id} 
                      onClick={() => handleCommentClick(elementS.kids)}>
                        <div className='comments__item comments__item_kidS'>{elementS.text}</div>
                      </li>
                    ))}
                  </li>
                ))}
              </li>
            ))}
          </li>
          ))}
      </ul>
  );
};
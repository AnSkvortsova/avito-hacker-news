import React, { useEffect, useState } from 'react';

import { NewsList } from '../NewsList/NewsList';

import * as api from '../../utils/api';

function App() {
  const [newsIds, setNewsIds] = useState([]);

  function getNewsIds() {
    api.getNewsIds()
    .then((data) => {
      setNewsIds(data);
      console.log('handleButtonClick')
    })
    .catch((err) => {console.log(err)})
  };

  useEffect(() => {
    getNewsIds();
    console.log('useEffect is here')
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getNewsIds();
      console.log('update');
    }, 60000);
    return () => clearTimeout(timer);
  });
  
  return (
    <div className='app'>
      <NewsList
      newsIds = {newsIds}
      update = {getNewsIds} />
    </div>
  );
}

export default App;

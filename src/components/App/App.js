import React, { useEffect, useState } from 'react';

import { NewsList } from '../NewsList/NewsList';

import * as api from '../../utils/api';

function App() {
  const [newsIds, setNewsIds] = useState([]);

  function getNewsIds() {
    api.getNewsIds()
    .then((data) => {
      setNewsIds(data)
    })
    .catch((err) => {console.log(err)})
  };


  useEffect(() => {
    getNewsIds();
  }, []);

  
  return (
    <div className="app">
      <NewsList
      newsIds = {newsIds} />
    </div>
  );
}

export default App;

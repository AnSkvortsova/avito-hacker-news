import React from 'react';
import { Route } from 'react-router-dom';

import { NewsList } from '../NewsList/NewsList';
import { NewsPage } from '../NewsPage/NewsPage';


function App() {
  
  return (
    <div className='app'>
      <Route exact path='/'>
        <NewsList />
      </Route>
      <Route path='/news'>
        <NewsPage />
      </Route>
    </div>
  );
}

export default App;

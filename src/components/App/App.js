import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import City from '../City/City';

const App = () => {
  const [location, setLocation] = useState('');

  const cleanLocation = searchLocation => {
    const cleaned = searchLocation.toLowerCase().replace(/\s+/g, '');
    setLocation(cleaned);
  };

  return (
    <Route exact path='/' render={() => {
      return (
        <main className='app-home'>
          <Header />
          <Search setSearchLocation={cleanLocation}/>
        </main>
      );
    }} />
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import getWeather from '../../api-calls';

import Header from '../Header/Header';
import Search from '../Search/Search';
import City from '../City/City';

const App = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});

  const searchForWeather = () => {
    getWeather(location)
    .then(res => {
      setWeather(res.data.values);
    })
    .catch(err => console.log('Error: ', err.message));
  };

  useEffect(() => {
    if(location) {
      // searchForWeather();
    };
  }, [location])

  //temp for weather data visualization
  useEffect(() => {
    if(Object.keys(weather).length) {
      console.log(weather)
    };
  }, [weather])

  return (
    <main>
      <Route exact path='/' render={() => {
        return (
          <section className='app-home'>
            <Header />
            <Search setSearchLocation={setLocation}/>
          </section>
        );
      }} />
      <Route exact path='/city/:city' render={() => {
        return (
          <section className='city-weather'>
            <City weather={weather}/>
          </section>
        );
      }}/>
    </main>
  );
};

export default App;

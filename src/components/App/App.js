import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';

import getWeather from '../../api-calls';

import Header from '../Header/Header';
import Search from '../Search/Search';
import City from '../City/City';
import Error from '../Error/Error';

const App = () => {
  const history = useHistory();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const cleanSearch = userSearch => {
    setSearch(userSearch);
    setLocation(userSearch.toLowerCase().replace(/\s+/g, ''));
  }

  const searchForWeather = () => {
    setError(false);

    getWeather(location)
    .then(res => {
      setWeather(res.data.values);
      history.push(`/city/${location}`)
    })
    .catch(() => setError(true));
  };

  useEffect(() => {
    // if (location) searchForWeather();
  }, [location])

  //temp for weather data visualization
  useEffect(() => {
    if (Object.keys(weather).length) {
      console.log(weather)
    };
  }, [weather])

  return (
    <main>
      <Route exact path='/' render={() => {
        return (
          <section className='app-home'>
            <Header />
            <Search searchLocation={cleanSearch} />
            {error && <Error attempt={search}/>}
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

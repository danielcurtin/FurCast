import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import getWeather from '../../api-calls';
import weatherCodes from '../../weather-codes';

import Header from '../Header/Header';
import Search from '../Search/Search';
import City from '../City/City';
import Error from '../Error/Error';

import { sanDiegoWeather } from '../../mock-data';

const App = () => {
  const history = useHistory();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherType, setWeatherType] = useState('');
  const [error, setError] = useState(false);

  const cleanSearch = (event, userSearch) => {
    event.preventDefault();
    setSearch(userSearch);
    setLocation(userSearch.toLowerCase().trim().replace(/\s+/g, '%20'));
  };

  const searchForWeather = () => {
    setError(false);

    getWeather(location)
    .then(res => {
      setWeather(res.data.values);
      setWeatherType(weatherCodes[res.data.values.weatherCode]);
    })
    .catch(() => setError(true));
  };

  useEffect(() => { if (weatherType) history.push(`/city/${location}`) }, [weather]);

  useEffect(() => { if (location) searchForWeather() }, [location]);

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <main className='app-home'>
            <Header page={'home'}/>
            <Search searchLocation={cleanSearch} />
            {error && <Error attempt={search}/>}
            <div className='home-bg'></div>
          </main>
        );
      }} />
      <Route exact path='/city/:city' render={() => <City weather={weather} type={weatherType} city={search}/>}/>
      <Route path='*' render={() => {
        return (
          <section className='bad-path'>
            <h1 className='bad-path-text'>Oops! Something went wrong.</h1>
            <button className='bad-path-button' onClick={() => history.push('/')}>Home</button>
          </section>
        );
      }} />
    </Switch>
  );
};

export default App;

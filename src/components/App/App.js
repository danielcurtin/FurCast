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
  const [weather, setWeather] = useState(sanDiegoWeather);
  const [weatherType, setWeatherType] = useState(weatherCodes[weather.weatherCode]);
  const [error, setError] = useState(false);

  const cleanSearch = (event, userSearch) => {
    event.preventDefault();
    setSearch(userSearch);
    setLocation(userSearch.toLowerCase().trim().replace(/\s+/g, '%20'));
  }

  const searchForWeather = () => {
    setError(false);

    getWeather(location)
    .then(res => {
      setWeather(res.data.values);
      getWeatherType();
      history.push(`/city/${location}`)
    })
    .catch(() => setError(true));
  };

  const getWeatherType = () => {
    setWeatherType(weatherCodes[weather.weatherCode])
  };

  useEffect(() => {
    if (location) searchForWeather();
  }, [location])

  //temp for weather data visualization
  useEffect(() => {
    if (Object.keys(weather).length) {
      console.log(weather)
    };
  }, [weather])

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
    </Switch>
  );
};

export default App;

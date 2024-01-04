import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import getWeather from 'src/api-calls';
import weatherCodes from 'src/weather-codes';

import Header from '../Header/Header';
import Search from '../Search/Search';
import City from '../City/City';
import Error from '../Error/Error';
import BadPath from '../BadPath/BadPath';

type MatchParams = {
  match: { params: { city: string } }
};

const App = () => {
  const history = useHistory();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({ humidity: 0, temperature: 0, uvIndex: 0, precipitationProbability: 0 });
  const [weatherType, setWeatherType] = useState('');
  const [error, setError] = useState(false);

  const cleanSearch = (userSearch: string) => {
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

  const resetCity = () => {
    setSearch('');
    setLocation('');
  };

  useEffect(() => { if (weatherType) history.push(`/city/${location}`) }, [weather]);

  useEffect(() => { if (location) searchForWeather() }, [location]);

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <main className='app-home'>
            <Header page={'home'} resetCity={resetCity} />
            <Search searchLocation={cleanSearch} />
            {error && <Error attempt={search} />}
            <div className='home-bg'></div>
          </main>
        );
      }} />
      <Route exact path='/city/:city' render={({ match }: MatchParams) => {
        if (match.params.city.replace(/\s+/g, '%20') === location) {
          return <City weather={weather} type={weatherType} city={search} resetCity={resetCity} />;
        } else {
          return <BadPath history={history} resetCity={resetCity} />;
        };
      }} />
      <Route path='*' render={() => <BadPath history={history} resetCity={resetCity}/>} />
    </Switch>
  );
};

export default App;

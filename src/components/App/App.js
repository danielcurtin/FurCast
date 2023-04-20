import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <main className='app-home'>
            <Header page={'home'}/>
            <Search searchLocation={cleanSearch} />
            {error && <Error attempt={search}/>}
          </main>
        );
      }} />
      <Route exact path='/city/:city' render={() => <City weather={weather} city={search}/>}/>
    </Switch>
  );
};

export default App;

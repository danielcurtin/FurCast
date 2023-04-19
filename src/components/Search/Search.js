import React, { useState } from "react";
import './Search.css';

import { NavLink } from "react-router-dom";

const Search = ({ setSearchLocation }) => {
  const [search, setSearch] = useState('');

  const cleanSearch = () => {
    return search.toLowerCase().replace(/\s + /g, '');
  };

  return (
    <form role="search" className="search">
      <input type="text" className="search-bar" id="searchBar" value={search} onChange={event => setSearch(event.target.value)}></input>
      <NavLink to={`/city/placeholder`} type="submit" className="search-button fa-solid fa-magnifying-glass" onClick={() => setSearchLocation(cleanSearch())}></NavLink>
      <label htmlFor="searchBar">Enter U.S. City or Zip Code</label>
    </form>
  );
};

export default Search;
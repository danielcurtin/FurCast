import React, { useState } from "react";
import './Search.css';

import { NavLink } from "react-router-dom";

const Search = ({ setSearchLocation }) => {
  const [search, setSearch] = useState('');

  return (
    <form className="search">
      <input type="text" className="search-bar" id="searchBar" value={search} onChange={event => setSearch(event.target.value)}></input>
      <NavLink to='/placeholder' type="submit" className="search-button fa-solid fa-magnifying-glass" onClick={() => {setSearchLocation(search)}}></NavLink>
      <label htmlFor="searchBar">Enter U.S. City or Zip Code</label>
    </form>
  );
};

export default Search;
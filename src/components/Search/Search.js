import React, { useState } from "react";
import './Search.css';

const Search = ({ searchLocation }) => {
  const [search, setSearch] = useState('');

  return (
    <form role="search" className="search">
      <input type="text" className="search-bar" id="searchBar" value={search} onChange={event => setSearch(event.target.value)}></input>
      <button type="submit" className="search-button fa-solid fa-magnifying-glass" onClick={() => searchLocation(search)}></button>
      <label htmlFor="searchBar">Enter City or Zip Code</label>
    </form>
  );
};

export default Search;
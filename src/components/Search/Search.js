import React from "react";
import './Search.css';

const Search = () => {
  return (
    <form className="search">
      <input type="text" className="search-bar" id="searchBar"></input>
      <button type="submit" className="search-button fa-solid fa-magnifying-glass"></button>
      <label htmlFor="searchBar">Enter U.S. City or Zip Code</label>
    </form>
  );
};

export default Search;
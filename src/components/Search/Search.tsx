import React, { useState } from "react";
import './Search.css';

type SearchProps = {
  searchLocation: (search: string) => void
};

const Search = ({ searchLocation }: SearchProps) => {
  const [search, setSearch] = useState('');

  const trySearch = (event: any) => {
    event.preventDefault();

    searchLocation(search);
    setSearch('');
  };

  return (
    <form role="search" className="search">
      <input type="text" className="search-bar" id="searchBar" value={search} onChange={event => setSearch(event.target.value)}></input>
      <button type="submit" className="search-button fa-solid fa-magnifying-glass" onClick={event => trySearch(event)}></button>
      <label htmlFor="searchBar">Enter City</label>
    </form>
  );
};

export default Search;
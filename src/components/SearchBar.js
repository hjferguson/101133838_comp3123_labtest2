import React from 'react';

const SearchBar = ({ citySearch, setCitySearch, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search city here"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
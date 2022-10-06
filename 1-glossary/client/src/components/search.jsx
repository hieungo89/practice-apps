import React from 'react';

const Search = ({ handleSearch }) => (
  <div className="Search">
    <p>Search word</p>
    <input type='text' placeholder='search term'
      onChange={(e) => {
        handleSearch(e.target.value);
      }} />
  </div>
);

export default Search;
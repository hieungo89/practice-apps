import React from 'react';

const Search = ({ handleSearch }) => (
  <div className="Search">
    <h3>Search word</h3>
    <input type='text' placeholder='Start Searching...'
      onChange={(e) => {
        handleSearch(e.target.value);
      }} />
  </div>
);

export default Search;
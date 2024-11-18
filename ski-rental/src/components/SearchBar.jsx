import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div className={`search-bar ${isFocused ? 'elevation-6' : 'elevation-3'}`}>
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

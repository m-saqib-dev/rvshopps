import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.css';
const handleClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  event.preventDefault();
  alert('asdf');
};
const Search = () => {
  return (
    <div className="search">
      <input type="search" name="search" className="input--search" />
      <button onClick={handleClick} className="btn btn--search">
        <FaSearch className="btn__search--icon" />
      </button>
    </div>
  );
};

export default Search;

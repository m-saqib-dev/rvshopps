import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setVisible((current) => !current);
    event.preventDefault();
  };
  return (
    <div className="flex">
      <input
        placeholder="Search"
        type="search"
        name="search"
        className={`p-2 h-8 rounded ${visible ? 'visible' : 'hidden'}`}
      />
      <button onClick={handleClick} className="p-2 h-8 text-gray-400">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({
  name,
  id,
  placeholder,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <div className="search-box">
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={onChange}
      />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBox;

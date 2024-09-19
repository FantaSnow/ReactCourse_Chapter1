import React from "react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search ToDo"
    />
  );
};

export default SearchInput;

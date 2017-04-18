import React from 'react';

const SearchInput = (props) => {
  return (
    <input type="search"
           name="search"
           {...props}
    />
  )
};

export default SearchInput;
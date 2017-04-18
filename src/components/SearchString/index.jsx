import React from 'react';

import SearchInput from '../SearchInput';
import SearchSubmit from '../SearchSubmit';

function SearchString(props) {
  return (
    <div className="blockSearch_wrapperSearch">
      <div className="blockSearch_search">
        <SearchInput />
        <SearchSubmit />
      </div>
    </div>
  )
}

export default SearchString;
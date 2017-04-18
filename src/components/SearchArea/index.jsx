import React, { Component } from 'react';

import SearchString from '../SearchString';
import SearchFilters from '../SearchFilters';

class SearchArea extends Component {
  render() {
    return (
      <div className="content_blockSearch">
        <SearchString />
        <SearchFilters />
      </div>
    )
  }
}

export default SearchArea;
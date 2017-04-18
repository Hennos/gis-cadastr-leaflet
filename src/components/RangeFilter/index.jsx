import React from 'react';
import PropTypes from 'prop-types';

function RangeFilter({options}) {
  return (
    <div className="blockSearch_quantity">
      <span>от</span>
      <input type="text" size="3"/>
      <span>до</span>
      <input type="text" size="3"/>
      <span>{options[0].unit}</span>
    </div>
  )
}

RangeFilter.propTypes = {
  unit: PropTypes.string
};

RangeFilter.defaultProps = {
  unit: "у.е."
};

export default RangeFilter;

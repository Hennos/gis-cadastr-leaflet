import React from 'react';
import PropTypes from 'prop-types';

function RangeFilter({options, onChange}) {
  const {unit} = options;
  return (
    <div className="blockSearch_quantity">
      <span>от</span>
      <input type="text" />
      <span>до</span>
      <input type="text" />
      <span>{unit}</span>
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

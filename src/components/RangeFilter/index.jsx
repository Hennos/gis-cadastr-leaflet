import React from 'react';
import PropTypes from 'prop-types';

function RangeFilter({options, onChange}) {
  function modifyBound(inputValue, type) {
    return (prevValue) => {
      const boundValue = parseInt(inputValue, 10);
      if (isNaN(boundValue)) {
        return prevValue
          .map((pare) => Object.assign([], pare))
          .filter((pare) => !Object.is(pare[0], type));
      }
      return prevValue
        .map((pare) => Object.assign([], pare))
        .filter((pare) => !Object.is(pare[0], type))
        .concat([[type, boundValue]]);
    }
  }
  return (
    <div className="blockSearch_quantity">
      <span>от</span>
      <input type="text" onChange={(e) => onChange(modifyBound(e.target.value, "lowBound"))} />
      <span>до</span>
      <input type="text" onChange={(e) => onChange(modifyBound(e.target.value, "upperBound"))} />
      <span>{options.unit}</span>
    </div>
  )
}

RangeFilter.propTypes = {
  options: PropTypes.object.isRequired
};

export default RangeFilter;

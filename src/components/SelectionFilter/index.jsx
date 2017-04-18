import React from 'react';
import PropTypes from 'prop-types';

import SelectionList from '../SelectionList';

function SelectionFilter({options, value, onChange}) {
  return (
    <div className="blockSearch_select">
      <div className="blockSearch_selectText">
        <p>Приоритетные районы {(value.length) ? `(${value.length})` : ""}</p>
      </div>
      <SelectionList
        className="blockSearch_selectItem"
        options={options}
        selected={value}
        onChange={onChange}
      />
    </div>
  )
}

SelectionFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectionFilter;

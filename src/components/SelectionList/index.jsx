import React from 'react';
import PropTypes from 'prop-types';

import Selection from '../Selection';

function SelectionList({className, options, selected, onChange, ...props}) {
  function prepareNodes() {
    return options.map((option) => {
      const node = Object.assign({}, option);
      node.checked = !!selected.find((cur) => {
        return cur === node.name;
      });
      return node;
    });
  }
  function modifyState(select) {
    return (prevSelected) => {
      if (typeof select !== 'string') {
        return prevSelected;
      }
      if (prevSelected.find((cur) => Object.is(cur, select))) {
        return prevSelected.filter((cur) => !Object.is(cur, select));
      } else {
        return prevSelected.concat(select);
      }
    }
  }
  return (
    <div className={"" + (className ? (" " + className) : "")}>
      {prepareNodes().map((node) => (
        <Selection
          key={node.name}
          onSelect={() => onChange(modifyState(node.name))}
          {...node}
        />
      ))}
    </div>
  )
}

SelectionList.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

SelectionList.defaultProps = {
  className: ""
};

export default SelectionList;
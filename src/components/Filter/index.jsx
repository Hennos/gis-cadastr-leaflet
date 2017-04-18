import React from 'react';
import PropTypes from 'prop-types';

import SelectionFilter from '../SelectionFilter';
import RangeFilter from '../RangeFilter';

const mapFilters = {
  selection: SelectionFilter,
  range: RangeFilter
};

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(modifier) {
    if (modifier === undefined) {
      return;
    }
    this.setState((prevState) => {
      const newValue = (typeof modifier === 'function') ? modifier(prevState.value) : modifier;
      return {
        value: newValue
      }
    });
  }

  render() {
    const {className, description, options, type} = this.props;
    const ConcreteFilter = mapFilters[type];
    return (
      <div className={"blockSearch_blocks" + (className ? (" " + className) : "")}>
        <p>{description + ':'}</p>
          <ConcreteFilter
            options={options}
            value={this.state.value}
            onChange={this.handleChange}
          />
      </div>
    )
  }
}

Filter.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.oneOf(Object.keys(mapFilters)).isRequired
};

Filter.defaultProps = {
  className: ""
};

export default Filter;
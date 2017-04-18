import React from 'react';

function ActiveShower(props) {
  return React.Children
    .toArray(props.children)
    .find((elem) => {
      return elem.props.name == props.active;
    })
}

export default ActiveShower;
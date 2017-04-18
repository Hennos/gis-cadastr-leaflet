import React from 'react';

function Title(props) {
  return (
    <div className="header_organization">
      <h2>{props.children}</h2>
    </div>
  )
}

export default Title;
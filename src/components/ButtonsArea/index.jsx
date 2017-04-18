import React from 'react';

function ButtonsArea(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default ButtonsArea;
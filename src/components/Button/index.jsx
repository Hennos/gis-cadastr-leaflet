import React from 'react';

function Button(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <p>{props.children}</p>
    </div>
  );
}

export default Button;
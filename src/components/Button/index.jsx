import React from 'react';

import './Button.css';

const Button = ({onClick}) =>
  <button className="default-btn" onClick={onClick}>Жмяк</button>;

export default Button;
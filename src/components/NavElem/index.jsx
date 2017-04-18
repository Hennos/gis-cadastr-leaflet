import React from 'react';

function NavElem(props) {
  return (
    <div className="navigation_itemsWrapper">
      <div className="navigation navigation_item">
        <a>{props.name}</a>
      </div>
    </div>
  );
}

export default NavElem;
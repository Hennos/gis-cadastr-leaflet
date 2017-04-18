import React from 'react';

function TitleArea(props) {
  return (
    <div className="header_organizationAndName">
      {props.children}
    </div>
  );
}

export default TitleArea;
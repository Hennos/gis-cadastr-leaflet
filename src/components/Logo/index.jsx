import React from 'react';
import PropTypes from 'prop-types';

const Logo = function Logo({src, alt}) {
  return (
    <div className="header_logo">
      <img src={src} alt={alt} />
    </div>
  )
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Logo;
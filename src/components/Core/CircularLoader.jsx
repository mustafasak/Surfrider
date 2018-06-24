import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/CircularLoader.css';

const CircularLoader = props => (
  <div
    className={`CircularLoader ${props.clear ? 'CircularLoader--white' : ''}`}
  >
    <span />
  </div>
);

CircularLoader.defaultProps = {
  clear: false,
};

CircularLoader.propTypes = {
  clear: PropTypes.bool,
};

export default CircularLoader;

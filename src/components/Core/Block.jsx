import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/Block.css';

class Block extends PureComponent {
  render() {
    const { title, children } = this.props;

    return (
      <div className="Block">
        <h3 className="Block__title">{title}</h3>
        <div className="Block__content">{children}</div>
      </div>
    );
  }
}

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]).isRequired,
};

export default Block;

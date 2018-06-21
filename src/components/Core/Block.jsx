import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/Block.css';

class Block extends PureComponent {
  render() {
    const { title, children, action } = this.props;

    return (
      <div className="Block">
        <header>
          <h3 className="Block__title">{title}</h3>
          {action}
        </header>
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
  action: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.shape({}),
  ]).isRequired
};

export default Block;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/Block.css';

class Block extends PureComponent {
  render() {
    const { title, children, action, noPadding } = this.props;

    return (
      <div className="Block">
        {title || action ? (
          <header>
            <h3 className="Block__title">{title}</h3>
            {action}
          </header>
        ) : null}
        <div
          className={`Block__content ${
            noPadding ? 'Block__content--no-padding' : ''
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
}

Block.defaultProps = {
  title: null,
  action: null,
  noPadding: false,
};

Block.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]).isRequired,
  action: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]),
  noPadding: PropTypes.bool,
};

export default Block;

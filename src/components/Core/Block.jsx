import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/Block.css';

class Block extends PureComponent {
  render() {
    const { title, children } = this.props;

    return (
      <div className="Block">
        <header>
          <h3 className="Block__title">{title}</h3>
          <img className="Block__more" src="/img/Button__more.svg" alt="Tout voir" />
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
};

export default Block;

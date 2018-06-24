import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/BlockUserLine.css';

class BlockUserLine extends PureComponent {
  render() {
    const { user } = this.props;

    return (
      <article className="BlockUserLine layout__grid">
        <div className="BlockUserLine__name layout__grid-item layout__grid-item--3/10">
          {user.firstName} {user.lastName}
        </div>
        <div className="BlockUserLine__role layout__grid-item layout__grid-item--4/10">
          {user.userGroup}
        </div>
        <a
          href="#"
          className="Button Button__outline Button__outline-small layout__grid-item layout__grid-item--3/10"
        >
          Voir le profil
        </a>
      </article>
    );
  }
}

BlockUserLine.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userGroup: PropTypes.string,
  }).isRequired,
};

export default BlockUserLine;

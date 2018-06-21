import React, {PureComponent} from 'react';
// import PropTypes from "prop-types";

import '../../assets/css/Core/BlockLine.css';

class BlockLine extends PureComponent {
    render() {
        // const { item } = this.props;

        return (
          <article
            className="BlockLine"
          >
            <div className="BlockLine__name">name</div>
            <div className="BlockLine__role">role</div>
            <a href="#" title="name" className="Button Button__outline Button__outline-small">Voir le profil</a>
          </article>
        );
    }
}

BlockLine.propTypes = {
    // item: PropTypes.shape({}).isRequired,
};

export default BlockLine;

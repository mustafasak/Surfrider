import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import '../../assets/css/Core/BlockContent.css';

class BlockContent extends PureComponent {
    render() {
        const { label, value } = this.props;

        return (
          <div className="BlockContent">
            <h4 className="BlockContent__label">{label}</h4>
            <div className="BlockContent__value">{value}</div>
          </div>
        );
    }
}

BlockContent.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default BlockContent;
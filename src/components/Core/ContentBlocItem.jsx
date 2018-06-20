import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import '../../assets/css/Core/ContentBlocItem.css';

class ContentBlocItem extends PureComponent {
    render() {
        const { label, value } = this.props;

        return (
          <div className="ContentBlocItem">
            <h4>{label}</h4>
            <div className="ContentBlocItem__value">{value}</div>
          </div>
        );
    }
}

ContentBlocItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default ContentBlocItem;
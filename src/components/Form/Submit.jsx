import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Form/Submit.css';

class Submit extends PureComponent {
  render() {
    const { label } = this.props;

    return (
      <div className="Submit">
        <input className="Submit__input" type="submit" value={label} />
      </div>
    );
  }
}

Submit.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Submit;

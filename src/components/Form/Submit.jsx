import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CircularLoader from '../Core/CircularLoader';

import '../../assets/css/Form/Submit.css';

class Submit extends PureComponent {
  render() {
    const { label, loading } = this.props;

    return (
      <div className={`Submit ${loading ? 'Submit--loading' : ''}`}>
        <input className="Submit__input" type="submit" value={label} />
        {loading && (
          <div className="Submit__loader">
            <CircularLoader />
          </div>
        )}
      </div>
    );
  }
}

Submit.defaultProps = {
  loading: false,
};

Submit.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Submit;

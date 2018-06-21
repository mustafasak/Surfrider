import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CircularLoader from '../Core/CircularLoader';

import '../../assets/css/Form/Submit.css';

class Submit extends PureComponent {
  render() {
    const { label, loading, error } = this.props;

    return (
      <div className="Submit__container">
        <div className={`Submit ${loading ? 'Submit--loading' : ''}`}>
          <input className="Submit__input" type="submit" value={label} />
          {loading && (
            <div className="Submit__loader">
              <CircularLoader />
            </div>
          )}
        </div>

        {error && <span className="Submit__error">{error}</span>}
      </div>
    );
  }
}

Submit.defaultProps = {
  loading: false,
  error: null,
};

Submit.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Submit;

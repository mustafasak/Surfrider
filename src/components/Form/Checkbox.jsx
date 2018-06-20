import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Form/Checkbox.css';

class Checkbox extends PureComponent {
  render() {
    const { label, name, value, onChange } = this.props;

    return (
      <div className="Checkbox">
        <label className="Checkbox__container" htmlFor={name}>
          <input
            className="Checkbox__input"
            type="checkbox"
            id={name}
            name={name}
            defaultChecked={value}
            onChange={onChange}
          />
          <span className="Checkbox__box" />
          <span className="Checkbox__label">{label}</span>
        </label>
      </div>
    );
  }
}

Checkbox.defaultProps = {
  value: false,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

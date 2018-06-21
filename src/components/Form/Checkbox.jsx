import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Form/Checkbox.css';

class Checkbox extends PureComponent {
  render() {
    const { label, name, value, disabled, onChange } = this.props;

    return (
      <div className={`Checkbox ${disabled ? 'Checkbox--disabled' : ''}`}>
        <label className="Checkbox__container" htmlFor={name}>
          <input
            className="Checkbox__input"
            type="checkbox"
            id={name}
            name={name}
            disabled={disabled}
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
  disabled: false,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Form/Input.css';

class Input extends PureComponent {
  render() {
    const {
      label,
      name,
      type,
      placeholder,
      value,
      disabled,
      onChange,
    } = this.props;

    return (
      <div className={`Input ${disabled ? 'Input--disabled' : ''}`}>
        <label className="Input__label" htmlFor={name}>
          {label}
        </label>
        <input
          className="Input__input"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  disabled: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Input;

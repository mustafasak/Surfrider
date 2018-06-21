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
      error,
      onChange,
    } = this.props;

    return (
      <div
        className={`Input ${disabled ? 'Input--disabled' : ''} ${
          error ? 'Input--error' : ''
        }`}
      >
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

        {error && <span className="Input__error">{error}</span>}
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  disabled: false,
  error: null,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;

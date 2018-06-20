import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/Core/InputField.css';

class InputField extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const { label, name, type, placeholder, value, onChange } = this.props;

    return (
      <div className="InputField">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;

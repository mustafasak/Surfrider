import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

import '../../assets/css/Core/Autocomplete.css';

class Autocomplete extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      isFocussed: false,
    };

    this.renderItems = this.renderItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.blurTimeout = null;

    this.debouncedOnSearch = debounce(props.onSearch, 300);
  }

  componentWillUnmount() {
    clearTimeout(this.blurTimeout);
  }

  handleChange(event) {
    const {
      target: { value },
    } = event;

    this.debouncedOnSearch(value);
  }

  handleClick(id) {
    this.props.onClick(id);
  }

  handleFocus() {
    this.setState({ isFocussed: true });
  }

  handleBlur() {
    this.blurTimeout = setTimeout(() => {
      this.setState({ isFocussed: false });
    }, 300);
  }

  renderItems() {
    const { items } = this.props;

    return (
      <div className="Autocomplete__items-container">
        {items.map(item => (
          <button
            className="Autocomplete__item"
            key={item.id}
            onClick={() => this.handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  render() {
    const { placeholder, items } = this.props;
    const { isFocussed } = this.state;

    return (
      <div className="Autocomplete">
        <input
          className="Autocomplete__input"
          type="text"
          placeholder={placeholder}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {isFocussed &&
          items.length > 0 && (
            <div className="Autocomplete__items">{this.renderItems()}</div>
          )}
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  placeholder: '',
  items: [],
};

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  onSearch: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Autocomplete;

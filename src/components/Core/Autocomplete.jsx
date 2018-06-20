import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

import '../../assets/css/Core/Autocomplete.css';

class Autocomplete extends PureComponent {
  constructor(props) {
    super();

    this.renderItems = this.renderItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.debouncedOnSearch = debounce(props.onSearch, 300);
  }

  handleChange(event) {
    this.debouncedOnSearch(event.target.value);
  }

  handleClick(id) {
    this.props.onClick(id);
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
    const { placeholder } = this.props;

    return (
      <div className="Autocmplete">
        <input
          className="Autocomplete__input"
          type="text"
          placeholder={placeholder}
          onChange={this.handleChange}
        />
        <div className="Autocomplete__items">{this.renderItems()}</div>
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
};

export default Autocomplete;

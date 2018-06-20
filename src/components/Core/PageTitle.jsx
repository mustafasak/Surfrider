import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../../assets/css/Core/PageTitle.css';

class PageTitle extends PureComponent {
  renderBreadcrumbs() {
    const { path } = this.props;

    if (path) {
      return (
        <div className="PageTitle__breadcrumbs">
          {path.map(item => {
            if (item.linkTo) {
              return (
                <NavLink
                  key={item.label}
                  to={item.linkTo}
                  className="PageTitle__breadcrumb-item"
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <span key={item.label} className="PageTitle__breadcrumb-item">
                {item.label}
              </span>
            );
          })}
        </div>
      );
    }

    return null;
  }

  render() {
    const { title, previousTo } = this.props;

    return (
      <div className="PageTitle">
        {previousTo && <NavLink to={previousTo} className="PageTitle__back" />}
        <div className="PageTitle__title-container">
          <h2 className="PageTitle__title">{title}</h2>
          {this.renderBreadcrumbs()}
        </div>
      </div>
    );
  }
}

PageTitle.defaultProps = {
  path: null,
  previousTo: null,
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.arrayOf(
    PropTypes.shape({ linkTo: PropTypes.string, label: PropTypes.string }),
  ),
  previousTo: PropTypes.string,
};

export default PageTitle;

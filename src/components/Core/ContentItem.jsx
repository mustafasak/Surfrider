import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import '../../assets/css/Core/ContentItem.css';

class ContentItem extends PureComponent {
    render() {
        const { item } = this.props;

        return (
          <article
            className="ContentItem"
          >
            <figure className="ContentItem__img">
              <img src={item.img} alt={item.title} />
            </figure>
            <div className="ContentItem__container">
              <h4>{item.title}</h4>
              {item.subTitle ? <span>{item.subTitle}</span> : ''}
              <p>{item.resume}</p>
            </div>
          </article>
        );
    }
}

ContentItem.propTypes = {
    item: PropTypes.shape({}).isRequired,
};

export default ContentItem;

import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import '../../assets/css/Core/BlockItem.css';

class BlockItem extends PureComponent {
    render() {
        const { item } = this.props;

        return (
          <article
            className="BlockItem"
          >
            <figure className="BlockItem__img">
              <img src={item.img} alt={item.title} />
            </figure>
            <div className="BlockItem__container">
              <h4 className="BlockItem__title">{item.title}</h4>
              {item.subTitle ? <span className="BlockItem__subTitle">{item.subTitle}</span> : ''}
              <p className="BlockItem__resume">{item.resume}</p>
            </div>
          </article>
        );
    }
}

BlockItem.propTypes = {
    item: PropTypes.shape({}).isRequired,
};

export default BlockItem;

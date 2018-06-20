import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import ContentBlocItem from "./ContentBlocItem";

import '../../assets/css/Core/ContentBlocItem.css';

class ContentBloc extends PureComponent {
    render() {
        const { data } = this.props;

        return (
          <article
            className="ContentBloc"
          >
            {
                data.map((item) => (<ContentBlocItem key={item.id} label={item.label} value={item.value} />))
            }
          </article>
        );
    }
}

ContentBloc.propTypes = {
    data: PropTypes.shape({}).isRequired,
};

export default ContentBloc;
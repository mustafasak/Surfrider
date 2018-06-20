import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import ContentItem from "./ContentItem";
import ContentBloc from "./ContentBloc";

import '../../assets/css/Core/ContentList.css';

class ContentList extends PureComponent {

    static setTemplate(list, type) {
        switch(type) {
            case "Item":
                return list.map((item) => (<ContentItem key={item.id} item={item} />));
            case "Bloc":
                return (<ContentBloc data={list} />);
            default:
                return null
        }
    }

    render() {
        const { title, list, type } = this.props;
        return (
          <section
            className="ContentList"
          >
            <header>
              <h3>{title}</h3>
              <img src="/img/Button__more.svg" alt="Tout voir" />
            </header>
            {ContentList.setTemplate(list, type)}
          </section>
        );
    }
}

ContentList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    type: PropTypes.string.isRequired
};

export default ContentList;

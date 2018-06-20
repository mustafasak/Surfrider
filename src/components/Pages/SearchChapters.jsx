import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { chapterShape } from '../../config/shapes/chapter';
import Autocomplete from '../Core/Autocomplete';
import removeDiacritics from '../../helpers/generalHelpers';

import '../../assets/css/Pages/SearchChapters.css';

class SearchChapters extends PureComponent {
  constructor() {
    super();

    this.state = {
      filteredChapters: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(value) {
    const { chapters } = this.props;

    const filteredChapters = chapters.filter(chapter =>
      removeDiacritics(chapter.name.toLowerCase()).includes(
        removeDiacritics(value.toLowerCase()),
      ),
    );

    this.setState({
      filteredChapters,
    });
  }
  handleClick(id) {
    const { chapters, history } = this.props;

    const selectedChapter = chapters.find(chapter => chapter._id === id);

    history.push(`/antennes/${selectedChapter.slug}`);
  }

  render() {
    const { chapters } = this.props;
    const { filteredChapters } = this.state;

    return (
      <div className="SearchChapters">
        <div className="SearchChapters__header">
          <h2 className="SearchChapters__title">Rechercher une antenne</h2>
          <div className="SearchChapters__search">
            <Autocomplete
              placeholder="Nom de l'antenne"
              items={filteredChapters.map(chapter => ({
                id: chapter._id,
                label: chapter.name,
              }))}
              onSearch={this.handleSearch}
              onClick={this.handleClick}
            />
            <NavLink to="/antennes/creation" className="SearchChapters__create">
              <span className="">Créer une antenne</span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

SearchChapters.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapStateToProps = state => ({
  chapters: state.chapter.chapters,
});

export default connect(mapStateToProps)(SearchChapters);

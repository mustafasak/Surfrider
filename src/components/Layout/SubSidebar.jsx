import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import { fetchMyChapters } from '../../actions/ChapterActions';
import { chapterShape } from '../../config/shapes/chapter';

import '../../assets/css/Layout/SubSidebar.css';

class SubSidebar extends PureComponent {
  componentDidMount() {
    this.props.fetchMyChapters();
  }

  render() {
    const { chapters } = this.props;

    return (
      <aside className="layout__sub-sidebar">
        <section className="SubSidebar">
          <div className="SubSidebar__chapters">
            {chapters.map(chapter => (
              <NavLink
                to={`/antennes/${chapter.slug}`}
                key={chapter['_id']}
                className="SubSidebar__chapter-item"
                activeClassName="SubSidebar__chapter-item--active"
              >
                <span className="SubSidebar__chapter-name">{chapter.name}</span>
                <span className="SubSidebar__chapter-location">
                  {chapter.city}, {chapter.country}
                </span>
              </NavLink>
            ))}
          </div>
        </section>
      </aside>
    );
  }
}

SubSidebar.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
  fetchMyChapters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  chapters: state.chapter.chapters,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchMyChapters,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(SubSidebar);

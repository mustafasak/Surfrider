import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { chapterShape } from '../../config/shapes/chapter';
import { userShape } from '../../config/shapes/user';

class SearchChapters extends PureComponent {
  render() {
    const { user, chapters } = this.props;

    if (!user.isAdmin) {
      return <Redirect to={`/antennes/${chapters[0].slug}`} />;
    }

    return (
      <div>
        <h2>Rechercher une antenne</h2>
      </div>
    );
  }
}

SearchChapters.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  chapters: state.chapter.chapters,
});

export default connect(mapStateToProps)(SearchChapters);

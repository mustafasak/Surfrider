import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

import { chapterShape } from '../../config/shapes/chapter';
import { userShape } from '../../config/shapes/user';

import SearchChapters from './Chapter/SearchChapters';
import Chapter from './Chapter/Chapter';
import CreateChapter from './Chapter/CreateChapter';

class Chapters extends PureComponent {
  render() {
    const { user, chapters } = this.props;

    if (!user.isAdmin && chapters.length <= 1) {
      return <Redirect to={`/antennes/${chapters[0].slug}`} />;
    }

    return (
      <div>
        <Switch>
          <Route exact path="/antennes" component={SearchChapters} />
          <Route path="/antennes/creation" component={CreateChapter} />
          <Route path="/antennes/:slug" component={Chapter} />
        </Switch>
      </div>
    );
  }
}

Chapters.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  chapters: state.chapter.chapters,
});

export default connect(mapStateToProps)(Chapters);

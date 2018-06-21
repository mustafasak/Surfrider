import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { userShape } from '../../config/shapes/user';
import { chapterShape } from '../../config/shapes/chapter';
import { fetchMyChapters } from '../../actions/ChapterActions';

import Sidebar from './Sidebar';
import Content from './Content';

class Dashboard extends PureComponent {
  componentDidMount() {
    if (this.props.chapters.length === 0) {
      this.props.fetchMyChapters();
    }
  }

  render() {
    const { authenticated, user } = this.props;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="layout__container">
        <Sidebar user={user} />
        <div className="layout__main">
          <Content />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  authenticated: PropTypes.bool.isRequired,
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)).isRequired,
  fetchMyChapters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  authenticated: state.user.authenticated,
  chapters: state.chapter.chapters,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMyChapters,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

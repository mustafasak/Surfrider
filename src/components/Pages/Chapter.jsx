import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chapterShape } from '../../config/shapes/chapter';

class Chapter extends PureComponent {
  render() {
    const { chapter } = this.props;

    return (
      <div>
        <h2>{chapter.name}</h2>
      </div>
    );
  }
}

Chapter.defaultProps = {
  chapter: {},
};

Chapter.propTypes = {
  chapter: PropTypes.shape(chapterShape),
};

const mapStateToProps = (state, props) => ({
  chapter: state.chapter.chapters.find(
    chapter => chapter.slug === props.match.params.slug,
  ),
});

export default connect(mapStateToProps)(Chapter);

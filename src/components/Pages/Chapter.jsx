import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chapterShape } from '../../config/shapes/chapter';
import ContentList from '../Core/ContentList';
import Events from '../../data/events.json';
import Actus from '../../data/actus.json';
import Missions from '../../data/missions.json';
import Members from '../../data/members.json';
import Dons from '../../data/dons.json';

import '../../assets/css/Pages/Chapter.css';

class Chapter extends PureComponent {
  render() {
    const { chapter } = this.props;

    return (
      <div className="Chapter">
        <h2>Antenne de {chapter.name}</h2>
        <div className="Chapter__container">
          <ContentList
            title="Dons"
            type="Bloc"
            list={Dons}
          />
          <ContentList
            title="Membres"
            type="Bloc"
            list={Members}
          />
          <ContentList
            title="Dernières missions"
            type="Item"
            list={Missions}
          />
          <ContentList
            title="Dernières actualités"
            type="Item"
            list={Actus}
          />
          <ContentList
            title="Derniers évènements"
            type="Item"
            list={Events}
          />
        </div>
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

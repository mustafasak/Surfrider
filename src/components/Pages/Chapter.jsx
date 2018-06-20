import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chapterShape } from '../../config/shapes/chapter';
import ContentItem from "../Core/ContentItem";
import ContentBloc from "../Core/ContentBloc";
import Block from '../Core/Block';


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
          <Block
            title="Dons"
          >
            <ContentBloc data={Dons} />
          </Block>
          <Block
            title="Membres"
          >
            <ContentBloc data={Members} />
          </Block>
          <Block
            title="Dernières missions"
          >
            {
              Missions.map((item) => (<ContentItem key={item.id} item={item} />))
            }
          </Block>
          <Block
            title="Dernières actualités"
          >
            {
              Actus.map((item) => (<ContentItem key={item.id} item={item} />))
            }
          </Block>
          <Block
            title="Derniers évènements"
          >
            {
              Events.map((item) => (<ContentItem key={item.id} item={item} />))
            }
          </Block>
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

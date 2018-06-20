import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chapterShape } from '../../../config/shapes/chapter';

import PageTitle from '../../Core/PageTitle';
import Block from '../../Core/Block';
import ContentItem from '../../Core/ContentItem';
import ContentBloc from '../../Core/ContentBloc';

import Events from '../../../data/events.json';
import Actus from '../../../data/actus.json';
import Missions from '../../../data/missions.json';
import Members from '../../../data/members.json';
import Dons from '../../../data/dons.json';

import '../../../assets/css/Pages/Chapter.css';
import { userShape } from '../../../config/shapes/user';

class Chapter extends PureComponent {
  render() {
    const { chapters, user } = this.props;

    const selectedChapter = chapters.find(
      chapter => chapter.slug === this.props.match.params.slug,
    );

    return (
      <div className="Chapter">
        <PageTitle
          title={`Antenne de ${selectedChapter.name}`}
          previousTo={user.isAdmin || chapters.length > 1 ? '/antennes' : null}
          path={[
            {
              linkTo: user.isAdmin || chapters.length > 1 ? '/antennes' : null,
              label: 'Gestion des antennes',
            },
            {
              label: `Antenne de ${selectedChapter.name}`,
            },
          ]}
        />
        <div className="layout__grid">
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block title="Dons">
              <ContentBloc data={Dons} />
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block title="Membres">
              <ContentBloc data={Members} />
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block title="Dernières missions">
              {Missions.map(item => <ContentItem key={item.id} item={item} />)}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block title="Dernières actualités">
              {Actus.map(item => <ContentItem key={item.id} item={item} />)}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block title="Derniers évènements">
              {Events.map(item => <ContentItem key={item.id} item={item} />)}
            </Block>
          </div>
        </div>
      </div>
    );
  }
}

Chapter.defaultProps = {
  chapters: [],
};

Chapter.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.shape(chapterShape)),
  user: PropTypes.shape(userShape).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }),
  }).isRequired,
};

const mapStateToProps = state => ({
  chapters: state.chapter.chapters,
  user: state.user.user,
});

export default connect(mapStateToProps)(Chapter);

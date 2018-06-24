import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { chapterShape } from '../../../config/shapes/chapter';
import { fetchChapterUsers } from '../../../actions/ChapterActions';

import PageTitle from '../../Core/PageTitle';
import Block from '../../Core/Block';
import BlockUserLine from '../../Core/BlockUserLine';
import BlockItem from '../../Core/BlockItem';
import BlockContent from '../../Core/BlockContent';

import Events from '../../../data/events.json';
import Actus from '../../../data/actus.json';
import Missions from '../../../data/missions.json';
import Members from '../../../data/members.json';
import Dons from '../../../data/dons.json';

import '../../../assets/css/Pages/Chapter.css';
import { userShape } from '../../../config/shapes/user';

class Chapter extends PureComponent {
  componentDidMount() {
    const selectedChapter = this.props.chapters.find(
      chapter => chapter.slug === this.props.match.params.slug,
    );

    this.props.fetchChapterUsers(selectedChapter._id);
  }

  render() {
    const { chapters, user, chapterUsersLoading } = this.props;

    const selectedChapter = chapters.find(
      chapter => chapter.slug === this.props.match.params.slug,
    );

    return (
      <div className="Chapter">
        <PageTitle
          title={`Antenne ${selectedChapter.name}`}
          previousTo={user.isAdmin || chapters.length > 1 ? '/antennes' : null}
          path={[
            {
              linkTo: user.isAdmin || chapters.length > 1 ? '/antennes' : null,
              label: 'Gestion des antennes',
            },
            {
              label: `Antenne ${selectedChapter.name}`,
            },
          ]}
        />
        <div className="layout__grid">
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block
              title="L'équipe de l'antenne"
              loading={chapterUsersLoading}
              action={
                <img
                  className="Block__more"
                  src="/img/Button__more.svg"
                  alt="Tout voir"
                />
              }
            >
              {selectedChapter.users &&
                selectedChapter.users.map(item => (
                  <BlockUserLine key={item._id} user={item} />
                ))}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block
              title="Membres"
              action={
                <img
                  className="Block__more"
                  src="/img/Button__more.svg"
                  alt="Tout voir"
                />
              }
            >
              {Members.map(item => (
                <BlockContent
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block
              title="Dons"
              action={
                <img
                  className="Block__more"
                  src="/img/Button__more.svg"
                  alt="Tout voir"
                />
              }
            >
              {Dons.map(item => (
                <BlockContent
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block
              title="Dernières missions"
              action={
                <img
                  className="Block__more"
                  src="/img/Button__more.svg"
                  alt="Tout voir"
                />
              }
            >
              {Missions.map(item => <BlockItem key={item.id} item={item} />)}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block
              title="Dernières actualités"
              action={
                <img
                  className="Block__more"
                  src="/img/Button__more.svg"
                  alt="Tout voir"
                />
              }
            >
              {Actus.map(item => <BlockItem key={item.id} item={item} />)}
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--1/3">
            <Block
              title="Derniers évènements"
              action={
                <img
                  className="Block__more"
                  src="/img/Button__more.svg"
                  alt="Tout voir"
                />
              }
            >
              {Events.map(item => <BlockItem key={item.id} item={item} />)}
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
  chapterUsersLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }),
  }).isRequired,
  fetchChapterUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  chapters: state.chapter.chapters,
  user: state.user.user,
  chapterUsersLoading: state.chapter.chapterUsersLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchChapterUsers,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chapter);

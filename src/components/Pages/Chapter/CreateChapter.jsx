import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import removeDiacritics from '../../../helpers/generalHelpers';
import { chapterShape } from '../../../config/shapes/chapter';
import { createChapter } from '../../../actions/ChapterActions';

import Block from '../../Core/Block';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';
import Submit from '../../Form/Submit';
import PageTitle from '../../Core/PageTitle';

import '../../../assets/css/Pages/CreateChapter.css';

class CreateChapter extends PureComponent {
  constructor() {
    super();

    this.state = {
      // CHAPTER INFORMATION
      name: '',
      slug: '',
      address: '',
      postalCode: '',
      city: '',
      country: '',
      // MANAGER INFORMATION
      lastName: '',
      firstName: '',
      email: '',
      phoneNumber: '',
      // OPTIONS
      createWebsite: false,
      manageWebsiteContent: false,
      marketingTools: false,
      manageUsers: false,
      manageDonations: false,
      manageEvents: false,
      manageNews: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.createChapterLoading &&
      !this.props.createChapterLoading &&
      !this.props.createChapterError &&
      this.props.createdChapter
    ) {
      this.props.history.push(`/antennes/${this.props.createdChapter.slug}`);
    }
  }

  handleSubmit(e) {
    const {
      name,
      slug,
      address,
      postalCode,
      city,
      country,
      lastName,
      firstName,
      email,
      phoneNumber,
      createWebsite,
      manageWebsiteContent,
      marketingTools,
      manageUsers,
      manageDonations,
      manageEvents,
      manageNews,
    } = this.state;

    e.preventDefault();

    const formattedSlug =
      slug.length > 0
        ? slug
        : removeDiacritics(name.toLowerCase().replace(/\s+/g, '-'));

    this.props.createChapter(
      name,
      formattedSlug,
      address,
      postalCode,
      city,
      country,
      lastName,
      firstName,
      email,
      phoneNumber,
      createWebsite,
      manageWebsiteContent,
      marketingTools,
      manageUsers,
      manageDonations,
      manageEvents,
      manageNews,
    );
  }

  render() {
    const { createChapterLoading, createChapterErrors } = this.props;
    const {
      name,
      slug,
      address,
      postalCode,
      city,
      country,
      lastName,
      firstName,
      email,
      phoneNumber,
      createWebsite,
      manageWebsiteContent,
      marketingTools,
      manageUsers,
      manageDonations,
      manageEvents,
      manageNews,
    } = this.state;

    return (
      <div className="CreateChapter">
        <PageTitle
          title="Création d'une antenne"
          previousTo="/antennes"
          path={[
            {
              linkTo: '/antennes',
              label: 'Gestion des antennes',
            },
            {
              label: "création d'une antenne",
            },
          ]}
        />

        <form onSubmit={this.handleSubmit}>
          <div className="layout__grid">
            <div className="layout__grid-item layout__grid-item--4/10">
              <Block title="Informations sur l'antenne">
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Nom de l'antenne"
                    name="name"
                    placeholder="Exemple: Biarritz"
                    value={name}
                    disabled={createChapterLoading}
                    error={createChapterErrors.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Nom de sous-domaine"
                    name="slug"
                    placeholder="Remplissage automatique"
                    value={
                      slug.length > 0
                        ? slug
                        : removeDiacritics(
                            name.toLowerCase().replace(/\s+/g, '-'),
                          )
                    }
                    disabled={createChapterLoading}
                    error={createChapterErrors.slug}
                    onChange={e => this.setState({ slug: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Adresse"
                    name="address"
                    placeholder="Adresse de l'antenne"
                    value={address}
                    error={createChapterErrors.address}
                    onChange={e => this.setState({ address: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Code postal"
                    name="postalCode"
                    placeholder="Code postal de l'antenne"
                    value={postalCode}
                    disabled={createChapterLoading}
                    error={createChapterErrors.postalCode}
                    onChange={e =>
                      this.setState({ postalCode: e.target.value })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Ville"
                    name="city"
                    placeholder="Ville de l'antenne"
                    value={city}
                    error={createChapterErrors.city}
                    onChange={e => this.setState({ city: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Pays"
                    name="country"
                    placeholder="Pays de l'antenne"
                    value={country}
                    disabled={createChapterLoading}
                    error={createChapterErrors.country}
                    onChange={e => this.setState({ country: e.target.value })}
                  />
                </div>
              </Block>
            </div>
            <div className="layout__grid-item layout__grid-item--4/10">
              <Block title="Informations sur le responsable">
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Nom du responsabe"
                    name="lastName"
                    placeholder="Exemple: Lambert"
                    value={lastName}
                    error={createChapterErrors.lastName}
                    onChange={e => this.setState({ lastName: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Prénom du responsabe"
                    name="firstName"
                    placeholder="Exemple: Jacques"
                    value={firstName}
                    disabled={createChapterLoading}
                    error={createChapterErrors.firstName}
                    onChange={e => this.setState({ firstName: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Email du responsabe"
                    name="Email"
                    placeholder="Exemple: mail@exemple.fr"
                    value={email}
                    disabled={createChapterLoading}
                    error={createChapterErrors.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Téléphone du responsabe"
                    name="phoneNumber"
                    placeholder="Exemple: 0601010101"
                    value={phoneNumber}
                    disabled={createChapterLoading}
                    error={createChapterErrors.phoneNumber}
                    onChange={e =>
                      this.setState({ phoneNumber: e.target.value })
                    }
                  />
                </div>
              </Block>
            </div>
            <div className="layout__grid-item layout__grid-item--2/10">
              <Block title="Options">
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Générer un site"
                    name="createWebsite"
                    value={createWebsite}
                    disabled={createChapterLoading}
                    onChange={() =>
                      this.setState({ createWebsite: !createWebsite })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <h4>Donner accès à</h4>
                </div>
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Gestion du contenu du site de l'antenne"
                    name="manageWebsiteContent"
                    value={manageWebsiteContent}
                    disabled={createChapterLoading}
                    onChange={() =>
                      this.setState({
                        manageWebsiteContent: !manageWebsiteContent,
                      })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Outils marketing"
                    name="marketingTools"
                    value={marketingTools}
                    disabled={createChapterLoading}
                    onChange={() =>
                      this.setState({ marketingTools: !marketingTools })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Gestion des utilisateurs"
                    name="manageUsers"
                    value={manageUsers}
                    disabled={createChapterLoading}
                    onChange={() =>
                      this.setState({ manageUsers: !manageUsers })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Dons"
                    name="manageDonations"
                    value={manageDonations}
                    onChange={() =>
                      this.setState({ manageDonations: !manageDonations })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Évènements"
                    name="manageEvents"
                    value={manageEvents}
                    disabled={createChapterLoading}
                    onChange={() =>
                      this.setState({ manageEvents: !manageEvents })
                    }
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Checkbox
                    label="Actus"
                    name="manageNews"
                    value={manageNews}
                    disabled={createChapterLoading}
                    onChange={() => this.setState({ manageNews: !manageNews })}
                  />
                </div>
              </Block>
            </div>
          </div>
          <div className="layout__grid layout__grid--justify-center layout__margin-vertical--medium">
            <Submit
              label="Créer l'antenne"
              loading={createChapterLoading}
              error={createChapterErrors.global}
            />
          </div>
        </form>
      </div>
    );
  }
}

CreateChapter.defaultProps = {
  createdChapter: null,
};

CreateChapter.propTypes = {
  createdChapter: PropTypes.shape(chapterShape),
  createChapterLoading: PropTypes.bool.isRequired,
  createChapterError: PropTypes.bool.isRequired,
  createChapterErrors: PropTypes.shape({}).isRequired,
  createChapter: PropTypes.func.isRequired,
  history: PropTypes.shape({ func: PropTypes.func }).isRequired,
};

const mapStateToProps = state => ({
  createdChapter: state.chapter.createdChapter,
  createChapterLoading: state.chapter.createChapterLoading,
  createChapterError: state.chapter.createChapterError,
  createChapterErrors: state.chapter.createChapterErrors,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createChapter,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateChapter);

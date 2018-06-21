import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import removeDiacritics from '../../../helpers/generalHelpers';
import { createChapter } from '../../../actions/ChapterActions';

import Block from '../../Core/Block';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';

import '../../../assets/css/Pages/CreateChapter.css';
import Submit from '../../Form/Submit';
import PageTitle from '../../Core/PageTitle';

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
    const { createChapterLoading } = this.props;
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
                    onChange={e => this.setState({ slug: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Adresse"
                    name="address"
                    placeholder="Adresse de l'antenne"
                    value={address}
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
                    onChange={e => this.setState({ firstName: e.target.value })}
                  />
                </div>
                <div className="layout__margin-vertical--medium">
                  <Input
                    label="Email du responsabe"
                    name="firstName"
                    placeholder="Exemple: mail@exemple.fr"
                    value={email}
                    disabled={createChapterLoading}
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
            <Submit label="Créer l'antenne" loading={createChapterLoading} />
          </div>
        </form>
      </div>
    );
  }
}

CreateChapter.propTypes = {
  createChapterLoading: PropTypes.bool.isRequired,
  createChapter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  createChapterLoading: state.chapter.createChapterLoading,
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

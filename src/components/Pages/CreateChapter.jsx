import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import removeDiacritics from '../../helpers/generalHelpers';

import Block from '../Core/Block';
import InputField from '../Core/InputField';

import '../../assets/css/Pages/CreateChapter.css';

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
    };
  }

  render() {
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
    } = this.state;

    return (
      <div className="CreateChapter">
        <form className="layout__grid">
          <div className="layout__grid-item layout__grid-item--4/10">
            <Block title="Informations sur l'antenne">
              <InputField
                label="Nom de l'antenne"
                name="name"
                placeholder="Exemple: Biarritz"
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <InputField
                label="Nom de sous-domaine"
                name="slug"
                placeholder="Exemple: Biarritz"
                value={
                  slug.length > 0
                    ? slug
                    : removeDiacritics(name.toLowerCase().replace(/\s+/g, '-'))
                }
                onChange={e => this.setState({ slug: e.target.value })}
              />
              <InputField
                label="Adresse"
                name="address"
                placeholder="Adresse de l'antenne"
                value={address}
                onChange={e => this.setState({ address: e.target.value })}
              />
              <InputField
                label="Code postal"
                name="postalCode"
                placeholder="Code postal de l'antenne"
                value={postalCode}
                onChange={e => this.setState({ postalCode: e.target.value })}
              />
              <InputField
                label="Ville"
                name="city"
                placeholder="Ville de l'antenne"
                value={city}
                onChange={e => this.setState({ city: e.target.value })}
              />
              <InputField
                label="Pays"
                name="country"
                placeholder="Pays de l'antenne"
                value={country}
                onChange={e => this.setState({ country: e.target.value })}
              />
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--4/10">
            <Block title="Informations sur le responsable">
              <InputField
                label="Nom du responsabe"
                name="lastName"
                placeholder="Exemple: Lambert"
                value={lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
              />
              <InputField
                label="Prénom du responsabe"
                name="firstName"
                placeholder="Exemple: Jacques"
                value={firstName}
                onChange={e => this.setState({ firstName: e.target.value })}
              />
              <InputField
                label="Email du responsabe"
                name="firstName"
                placeholder="Exemple: mail@exemple.fr"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <InputField
                label="Téléphone du responsabe"
                name="phoneNumber"
                placeholder="Exemple: 0601010101"
                value={phoneNumber}
                onChange={e => this.setState({ phoneNumber: e.target.value })}
              />
            </Block>
          </div>
          <div className="layout__grid-item layout__grid-item--2/10">
            <Block title="Options">
              <div />
            </Block>
          </div>
        </form>
      </div>
    );
  }
}

CreateChapter.propTypes = {};

export default connect(
  null,
  null,
)(CreateChapter);

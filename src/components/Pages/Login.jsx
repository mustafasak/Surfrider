import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../../actions/UserActions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();

    this.props.loginUser(email, password);
  }

  render() {
    const { authenticated } = this.props;
    const { email, password } = this.state;

    if (authenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Login">
        <img src="/img/logo.png" className="logo" alt="Surfrider logo" />
        <div className="Login__form">
          <h2>Connexion</h2>
          <form onSubmit={this.onSubmit}>
            <div className="Login__input">
              <label htmlFor="email">
                <span />
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div className="Login__input">
              <label htmlFor="password">
                <span />
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>
            <div className="Login__submit">
              <input
                type="submit"
                value="Connexion"
                disabled={email === '' || password === ''}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

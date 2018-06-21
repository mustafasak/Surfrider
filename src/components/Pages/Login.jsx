import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../../actions/UserActions';
import '../../assets/css/Pages/Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      emailFocussed: false,
      passwordFocussed: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();

    this.props.loginUser(email, password);
  }

  static getInputState(inputFocussed, input, loginError) {
    if (loginError) {
      return 'error';
    } else if (inputFocussed || input !== '') {
      return 'focussed';
    }

    return '';
  }

  render() {
    const { authenticated, loginError, loginErrorMessage } = this.props;
    const { email, password, emailFocussed, passwordFocussed } = this.state;
    let errorMessage = 'Une erreur est survenue';

    if (authenticated) {
      return <Redirect to="/" />;
    }

    if (loginError && loginErrorMessage.length > 0) {
      errorMessage = loginErrorMessage;
    }

    return (
      <div className="Login">
        <div className="Login__container Login__container--left">
          <figure className="Login__logo">
            <img src="/img/Logo__white.svg" alt="Surfrider logo" />
            <figcaption>Dashboard Surfrider</figcaption>
          </figure>
          <div className="Global__filter" />
        </div>
        <div className="Login__container Login__container--right">
          <div className="Login__form">
            <h2>Connexion</h2>
            {loginError ? <p className="Login__error">{errorMessage}</p> : null}
            <form onSubmit={this.onSubmit}>
              <div className="Login__input">
                <label
                  htmlFor="email"
                  className={Login.getInputState(
                    emailFocussed,
                    email,
                    !!loginError,
                  )}
                >
                  <span>Adresse e-mail</span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onFocus={() => this.setState({ emailFocussed: true })}
                    onBlur={() => this.setState({ emailFocussed: false })}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </label>
              </div>
              <div className="Login__input">
                <label
                  htmlFor="password"
                  className={Login.getInputState(
                    passwordFocussed,
                    password,
                    !!loginError,
                  )}
                >
                  <span>Saisissez le mot de passe</span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onFocus={() => this.setState({ passwordFocussed: true })}
                    onBlur={() => this.setState({ passwordFocussed: false })}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </label>
              </div>
              <div className="Login__submit">
                <input
                  type="submit"
                  value="Connexion"
                  className="Button"
                  /* disabled={email === '' || password === ''} */
                />
                <a href="#" title="#">
                  Mot de passe oublié ?
                </a>
              </div>
            </form>

            <div className="Login__lostpassword" />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  loginError: state.user.loginError,
  loginErrorMessage: state.user.loginErrorMessage,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

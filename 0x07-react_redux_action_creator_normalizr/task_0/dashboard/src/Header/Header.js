import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import AppContext from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <img
          src={logo}
          className={css(styles.appHeaderImg)}
          alt="Holberton Logo"
        />
        <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome <strong>{user.email}</strong>{' '}
            <em>
              (
              <a href="#" onClick={logOut}>
                logout
              </a>
              )
            </em>
          </section>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  appHeaderImg: {
    width: '250px',
  },
  appHeaderH1: {
    color: '#e0354b',
    fontSize: '2.7rem',
    fontWeight: '700',
  },
});

export default Header;

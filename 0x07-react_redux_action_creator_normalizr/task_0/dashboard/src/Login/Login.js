import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.25rem',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },

  formEmail: {
    display: 'flex',
    gap: '0.25rem',
    '@media (max-width: 900px)': {
      gap: '2.5rem',
    },
  },

  formPassword: {
    display: 'flex',
    gap: '1rem',
  },

  button: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem',
    '@media (max-width: 900px)': {
      alignSelf: 'start',
    },
  },
});

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    props.logIn(
      event.target.elements.email.value,
      event.target.elements.password.value
    );
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log('email: ', event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);

    console.log('password: ', event.target.value);
  };

  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [email, password]);

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <header>
          <p>Login to access the full dashboard</p>
        </header>
        <div className={css(styles.formGroup)}>
          <div className={css(styles.formEmail)}>
            <label htmlFor="your-email">Email: </label>
            <input
              type="email"
              id="your-email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className={css(styles.formPassword)}>
            <label htmlFor="your-passowrd">Password: </label>
            <input
              type="password"
              id="your-passowrd"
              name="password"
              value={password}
              onChange={handleChangePassword}
              required
            />
          </div>
          <input
            type="submit"
            value="Submit"
            disabled={!enableSubmit}
            className={css(styles.button)}
          />
        </div>
      </form>
    </>
  );
}

Login.propTypes = {
  logIn: propTypes.func,
};

export default Login;

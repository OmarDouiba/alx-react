import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  appFooterP: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
  },
});

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className={css(styles.appFooterP)}>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>

        {user.isLoggedIn && (
          <p className={css(styles.appFooterP)}>
            <a href="#">Contact us</a>
          </p>
        )}
      </div>
    </>
  );
}

export default Footer;

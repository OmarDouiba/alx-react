import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  formGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "0.25rem",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },

  formEmail: {
    display: "flex",
    gap: "0.25rem",
    "@media (max-width: 900px)": {
      gap: "2.5rem",
    },
  },

  formPassword: {
    display: "flex",
    gap: "1rem",
  },

  button: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.875rem",
    "@media (max-width: 900px)": {
      alignSelf: "start",
    },
  },
});

function Login() {
  return (
    <>
      <form action="#">
        <header>
          <p>Login to access the full dashboard</p>
        </header>
        <div className={css(styles.formGroup)}>
          <div className={css(styles.formEmail)}>
            <label htmlFor="your-email">Email: </label>
            <input type="email" id="your-email" required />
          </div>
          <div className={css(styles.formPassword)}>
            <label htmlFor="your-passowrd">Password: </label>
            <input type="password" id="your-passowrd" required />
          </div>
          <button className={css(styles.button)}>Ok</button>
        </div>
      </form>
    </>
  );
}

export default Login;

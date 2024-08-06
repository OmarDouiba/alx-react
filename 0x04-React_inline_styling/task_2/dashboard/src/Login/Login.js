import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  formGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },

  formEmail: {
    display: "flex",
    gap: "1rem",
  },
  formPassword: {
    display: "flex",
    gap: "1rem",
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
          <button>Ok</button>
        </div>
      </form>
    </>
  );
}

export default Login;

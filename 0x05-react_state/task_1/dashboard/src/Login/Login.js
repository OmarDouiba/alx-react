import React, { useState, useEffect } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log("isLoggi");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log("password: ", event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log("email: ", event.target.value);
  };

  useEffect(() => {
    if (email.trim() !== "" && password.trim() !== "") {
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
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className={css(styles.formPassword)}>
            <label htmlFor="your-passowrd">Password: </label>
            <input
              type="password"
              id="your-passowrd"
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

export default Login;

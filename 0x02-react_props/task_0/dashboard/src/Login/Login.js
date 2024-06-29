import "./Login.css";
import React from "react";

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form className="form">
        <label htmlFor="email" className="label-mg">
          email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="input-mg"
          required
        />

        <label htmlFor="password" className="label-mg">
          password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input-mg"
          required
        />
        <button>OK</button>
      </form>
    </>
  );
}

export default Login;

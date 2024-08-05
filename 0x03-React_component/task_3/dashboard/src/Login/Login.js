import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <form action="#">
        <header>
          <p>Login to access the full dashboard</p>
        </header>
        <div className="form-group">
          <div className="form-email">
            <label htmlFor="your-email">Email: </label>
            <input type="email" id="your-email" required />
          </div>
          <div className="form-password">
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

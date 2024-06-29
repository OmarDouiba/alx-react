import "./App.css";
import logo from "../logo.jpg";
import { getFooterCopy, getFullYear } from "../utils/utils";

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
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
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;

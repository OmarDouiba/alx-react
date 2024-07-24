import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
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
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;

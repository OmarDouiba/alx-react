import React, { Component } from "react";
import "../App/App.css";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  };
  render() {
    const isLoggedIn = this.props;
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        html: {
          __html: getLatestNotification(),
        },
        type: "urgent",
      },
    ];
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};

export default App;

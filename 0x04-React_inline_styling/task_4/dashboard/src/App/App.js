import React, { Component } from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

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
    const { isLoggedIn } = this.props;
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
          <div className={css(styles.appHeader)}>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title={"Course list"}>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={"Log in to continue"}>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title={"News from the School"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vitae ratione voluptate esse alias tempora? Possimus
                magnam aut, quaerat unde impedit alias obcaecati perferendis
                iure voluptate facere repellendus explicabo incidunt dolores!
              </p>
            </BodySection>
          </div>

          <div className={css(styles.appFooter)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  /* Body */
  appBody: {
    marginTop: "4rem",
    marginLeft: "3rem",
    marginRight: "3rem",
  },

  /* Header */
  appHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "0.25rem solid #e0354b",
  },

  /* Footer */

  appFooter: {
    borderTop: "0.25rem solid #e0354b",
    textAlign: "center",
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;

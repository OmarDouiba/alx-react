import { shallow, mount } from "enzyme";
import App from "./App";
import React from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={false} />);
  });
  it("Render App without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Contain the Notifications component", () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });
  it("Contain the Header component", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });
  it("Contain the Login component", () => {
    expect(wrapper.find(Login).exists()).toBe(false);
  });
  it("Contain the Footer component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
  it("Contain the CourseList component", () => {
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
});

describe("App component login part", () => {
  let wrapper;
  const logOut = jest.fn();
  const alertMock = jest.spyOn(global.window, "alert");
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  afterEach(() => {
    alertMock.mockRestore();
  });
  it("when isLoggedIn is true,", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
  it("calls logOut and shows alert when Control and h keys are pressed", () => {
    wrapper = mount(<App logOut={logOut} />);

    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
    expect(logOut).toHaveBeenCalled();
    wrapper.unmount();
  });
});

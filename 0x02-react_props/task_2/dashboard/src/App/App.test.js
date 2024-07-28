import { shallow } from "enzyme";
import App from "./App";
import React from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
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
    expect(wrapper.find(Login).exists()).toBe(true);
  });
  it("Contain the Footer component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});

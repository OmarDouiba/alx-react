import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Renders Elements without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("contains the Notifications component", () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });
  it("contains the Header component", () => {
    expect(wrapper.find(Header).length).toBe(1);
  });
  it("contains the Login component", () => {
    expect(wrapper.find(Login).length).toBe(1);
  });
  it("contains the Footer component", () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });
});

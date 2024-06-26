import { App } from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App component", () => {
  it("Renders Elements without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").length).toBe(1);
  });
  it("renders a div with the class App-bodt", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body").length).toBe(1);
  });
  it("renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").length).toBe(1);
  });
});

import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Renders Elements without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  // it("renders a div with the class App-header", () => {
  //   expect(wrapper.find(".App-header").length).toBe(1);
  // });
  // it("renders a div with the class App-bodt", () => {
  //   expect(wrapper.find(".App-body").length).toBe(1);
  // });
  // it("renders a div with the class App-footer", () => {
  //   expect(wrapper.find(".App-footer").length).toBe(1);
  // });
});

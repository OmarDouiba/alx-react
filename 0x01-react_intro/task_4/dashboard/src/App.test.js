import { shallow } from "enzyme";
import App from "./App";
import React from "react";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Render App without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Render a div with the class App-header", () => {
    expect(wrapper.find(".App-header").exists()).toBe(true);
  });
  it("Render a div with the class App-body", () => {
    expect(wrapper.find(".App-body").exists()).toBe(true);
  });
  it("Render a div with the class App-footer", () => {
    expect(wrapper.find(".App-footer").exists()).toBe(true);
  });
});

import Login from "./Login";
import { shallow } from "enzyme";
import React from "react";

describe("Login Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it("Render component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Render input Tag", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });
  it("Render label Tag", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

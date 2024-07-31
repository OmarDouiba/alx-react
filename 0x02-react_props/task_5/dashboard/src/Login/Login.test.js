import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it("Renders header without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders 2 input tags and 2 label tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

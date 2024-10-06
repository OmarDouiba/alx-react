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

  it("verify that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    wrapper.find("#email").simulate("change", { target: { value: "t" } });
    wrapper.find("#password").simulate("change", { target: { value: "t" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(
      false
    );
  });
});

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Render App without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

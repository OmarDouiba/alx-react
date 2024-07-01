import Footer from "./Footer";
import { shallow } from "enzyme";
import React from "react";

describe("Footer component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it("Render component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Render Copyright text", () => {
    expect(wrapper.text()).toContain("Copyright");
  });
});

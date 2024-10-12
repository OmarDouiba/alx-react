import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";


describe("Header component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("Renders header without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders img and h1 tag", () => {
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});

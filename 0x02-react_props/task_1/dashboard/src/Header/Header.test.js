import Header from "./Header";
import { shallow } from "enzyme";
import React from "react";

describe("test Header Components", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("Render Elements without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Render img tag", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
  it("Render h1 tag", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});

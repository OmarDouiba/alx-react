import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";


describe("Footer component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it("Renders header without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders the text “Copyright”", () => {
    expect(wrapper.find("p").text()).toContain("Copyright");
  });
});

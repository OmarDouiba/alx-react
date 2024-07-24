import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from "react";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });
  it("Render App without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders three list items", () => {
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it("Renders the text Here is the list of notifications", () => {
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });
});

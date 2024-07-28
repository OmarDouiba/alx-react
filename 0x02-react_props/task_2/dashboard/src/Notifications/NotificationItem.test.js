import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotificationItem />);
  });
  it("Renders component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders the correct html", () => {
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.find("li").text()).toContain("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
  });
  it("Renders correct html using html prop", () => {
    wrapper.setProps({ type: "urgent", html: { __html: "<u>test</u>" } });
    expect(wrapper.find("li").prop("dangerouslySetInnerHTML")).toEqual({
      __html: "<u>test</u>",
    });
  });
});

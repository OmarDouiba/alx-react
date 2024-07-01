import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotificationItem />);
  });
  it("Render NotificationItem without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Render correct html", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop("data-notification-type")).toBe("default");
    expect(wrapper.find("li").text()).toBe("test");
  });
  it("Render renders the correct html using html props", () => {
    wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);

    expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
  });
});

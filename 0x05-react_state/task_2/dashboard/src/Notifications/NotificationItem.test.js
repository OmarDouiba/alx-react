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
  it("calls markAsRead with the right ID when clicked", () => {
    const markAsReadSpy = jest.fn();
    const notification = {
      id: 1,
      type: "default",
      value: "New course available",
    };

    const wrapper = shallow(
      <NotificationItem
        id={notification.id}
        type={notification.type}
        value={notification.value}
        markAsRead={markAsReadSpy}
      />
    );

    wrapper.find("li").simulate("click");
    expect(markAsReadSpy).toHaveBeenCalledWith(notification.id);
  });
});

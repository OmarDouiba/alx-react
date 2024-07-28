import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });
  it("Render App without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders three list items", () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it("Renders the text Here is the list of notifications", () => {
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });
  it("Renders the right html", () => {
    let wrapperItems = shallow(
      <NotificationItem type={"default"} value={"test"} />
    );
    expect(wrapperItems.find("li").prop("data-notification-type")).toBe(
      "default"
    );
    expect(wrapperItems.find("li").text()).toContain("test");
  });
});

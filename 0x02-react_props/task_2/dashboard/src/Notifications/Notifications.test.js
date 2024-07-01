import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("renders Notifications without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the first NotificationItem with correct props", () => {
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.prop("data-priority")).toBe("default");
    expect(firstItem.prop("value")).toEqual("New course available");
  });

  it("renders the second NotificationItem with correct props", () => {
    const secondItem = wrapper.find(NotificationItem).at(1);
    expect(secondItem.prop("data-priority")).toBe("urgent");
    expect(secondItem.prop("value")).toBe("New resume available");
  });

  it("renders the third NotificationItem with correct props", () => {
    const thirdItem = wrapper.find(NotificationItem).at(2);
    expect(thirdItem.prop("data-priority")).toBe("urgent");
    expect(thirdItem.prop("html")).toEqual({
      __html: "<strong>Urgent requirement</strong> - complete by EOD",
    });
  });
});

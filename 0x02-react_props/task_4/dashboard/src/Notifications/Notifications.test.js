import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
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
  it("The menu item is being displayed when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });
  it("The div.Notifications is not being displayed when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });
  it("The menu item is being displayed when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });
  it("The div.Notifications is being displayed when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.Notifications")).toHaveLength(1);
  });
});

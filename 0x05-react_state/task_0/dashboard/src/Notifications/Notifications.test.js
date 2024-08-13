import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Test App", () => {
  let wrapper;
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "default", value: "New notification" },
  ];
  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
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
  it("markAsRead logs the correct message", () => {
    console.log = jest.fn();
    const wrapper = mount(<Notifications notifications={notifications} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(console.log).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );
  });

  it("NotificationItem calls markAsRead when clicked", () => {
    const markAsReadMock = jest.fn();
    const wrapper = mount(
      <NotificationItem
        id={1}
        type="default"
        value="New course available"
        markAsRead={markAsReadMock}
      />
    );
    wrapper.find("li").simulate("click");
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
  it("verify that when updating the props of the component with the same list, the component doesn’t rerender", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );
    wrapper.setProps({ listNotifications: listNotificationsNoUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  });

  it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );
    wrapper.setProps({ listNotifications: listNotificationsUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
  });
});

describe("Notifications component React State", () => {
  let wrapper;
  let handleDisplayDrawer;
  let handleHideDrawer;

  beforeEach(() => {
    handleDisplayDrawer = jest.fn();
    handleHideDrawer = jest.fn();
    wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
  });

  it("should call handleDisplayDrawer when the menu item is clicked", () => {
    wrapper.find("#menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });
  it("should call handleHideDrawer when the close button is clicked", () => {
    wrapper.find("#closeNotifications").simulate("click");
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});

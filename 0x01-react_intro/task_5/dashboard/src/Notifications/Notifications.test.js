import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });
  it("renders Notifications without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders 3 list items", () => {
    expect(wrapper.find("li").length).toEqual(3);
  });
  it("render text", () => {
    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });
});

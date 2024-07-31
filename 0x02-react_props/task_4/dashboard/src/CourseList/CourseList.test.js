import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });
  it("Renders components without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Renders  different rows", () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});

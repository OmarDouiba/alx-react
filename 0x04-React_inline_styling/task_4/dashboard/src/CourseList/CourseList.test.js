import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component", () => {
  let wrapper;
  const listCourses = [
    { id: 1, name: "Math", credit: 3 },
    { id: 2, name: "Science", credit: 4 },
    { id: 3, name: "History", credit: 2 },
  ];

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it("renders components without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

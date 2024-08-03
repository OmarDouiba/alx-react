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

  it("renders 3 rows", () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(wrapper.length);
  });

  it("renders 0 rows if listCourses is empty", () => {
    wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(wrapper.length);
    expect(wrapper.find("p").text()).toBe("No courses available");
  });

  it("renders 0 rows if listCourses is not provided", () => {
    wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(wrapper.length);
    expect(wrapper.find("p").text()).toBe("No courses available");
  });
});

import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course" />);
  });
  it("Renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toBe("2");
    wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Course"
        textSecondCell="Credit"
      />
    );
    expect(wrapper.find("th")).toHaveLength(2);
  });
  it("Renders two td cells when isHeader is false", () => {
    wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Math" textSecondCell="3" />
    );
    expect(wrapper.find("td")).toHaveLength(2);
  });
});

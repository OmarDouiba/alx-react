import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

it("should have the correct CSS class", () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p>test children node</p>
    </BodySectionWithMarginBottom>
  );

  expect(wrapper.find("div").hasClass("bodySectionWithMargin")).toBe(true);
});

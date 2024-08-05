it("should have the correct CSS class", () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p>test children node</p>
    </BodySectionWithMarginBottom>
  );

  expect(wrapper.find("div").hasClass("bodySectionWithMargin")).toBe(true);
});

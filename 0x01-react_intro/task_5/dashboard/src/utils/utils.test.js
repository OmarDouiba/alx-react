import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("return full year", () => {
  const fullYear = new Date().getFullYear();
  expect(getFullYear()).toBe(fullYear);
});

test("return Holberton School if true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("return Holberton School main dashboard if false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("return Urgent requirement - complete by EOD", () => {
  expect(getLatestNotification()).toBe(
    `<strong>Urgent requirement</strong> - complete by EOD`
  );
});

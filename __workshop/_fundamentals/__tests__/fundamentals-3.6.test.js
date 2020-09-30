// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["sub", 10, 15])).toBe(5);
  expect(calculator(["mul", 5, 5])).toBe(25);
	expect(calculator(["div", 5, 5])).toBe(1);
});

// More info on jest expect: https://jestjs.io/docs/en/expect

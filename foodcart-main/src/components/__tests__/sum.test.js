const { sum } = require("../sum");

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(4, 5);
  // Assertion
  expect(result).toBe(9); //  -- this line is known as assertion
});

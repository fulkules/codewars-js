const uniqueInOrder = require("./index");

test("Test 1", () => {
  expect(uniqueInOrder("AAAABBBCCDAABBB")).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "A",
    "B"
  ]);
});

test("Test 2", () => {
  expect(uniqueInOrder("ABBCcAD")).toStrictEqual([
    "A",
    "B",
    "C",
    "c",
    "A",
    "D"
  ]);
});

test("Test 3", () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
});

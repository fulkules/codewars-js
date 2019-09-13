const dupEncoder = require("./index");

test("Test 1", () => {
  expect(dupEncoder("din")).toStrictEqual("(((");
});

test("Test 2", () => {
  expect(dupEncoder("recede")).toStrictEqual("()()()");
});

test("Test 3", () => {
  expect(dupEncoder("Success")).toStrictEqual(")())())");
});

test("Test 4", () => {
  expect(dupEncoder("(( @")).toStrictEqual("))((");
});

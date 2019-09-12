const dupCount = require("./index");

test("Test 1", () => {
  expect(dupCount("abcde")).toStrictEqual(0);
});

test("Test 2", () => {
  expect(dupCount("aAbBcd")).toStrictEqual(2);
});

test("Test 3", () => {
  expect(dupCount("aAbc44d")).toStrictEqual(2);
});

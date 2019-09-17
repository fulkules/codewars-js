const order = require("./index");

test("Test 1", () => {
  expect(order("is2 Thi1s T4est 3a")).toStrictEqual("Thi1s is2 3a T4est");
});
test("Test 2", () => {
  expect(order("4of Fo1r pe6ople g3ood th5e the2")).toStrictEqual(
    "Fo1r the2 g3ood 4of th5e pe6ople"
  );
});
test("Test 3", () => {
  expect(order("")).toStrictEqual("");
});
test("Test 3", () => {
  expect(
    order("equ8ally pr4ejudice, ev7eryone I5 3all Fr1ee of2 ha6te")
  ).toStrictEqual("Fr1ee of2 3all pr4ejudice, I5 ha6te ev7eryone equ8ally");
});

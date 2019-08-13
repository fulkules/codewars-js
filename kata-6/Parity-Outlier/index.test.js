const findOutlier = require('./index');

test('Test 1', () => {
  expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
})

test('Test 2', () => {
  expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
})

test('Test 3', () => {
  expect(findOutlier([-10, -23, 8, 16, 32])).toBe(-23);
})
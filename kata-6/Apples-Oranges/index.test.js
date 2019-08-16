const countApplesAndOranges = require('./index');

test('Test 1', () => {
  expect(countApplesAndOranges(7, 10, 4, 12, [3, -2, 1], [-3, 2, -1])).toStrictEqual([1, 1]);
})

test('Test 2', () => {
  expect(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])).toStrictEqual([1, 2]);
})

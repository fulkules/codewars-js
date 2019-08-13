const persistence = require('./index');

test('Test 1', () => {
  expect(persistence(39)).toBe(3);
})

test('Test 2', () => {
  expect(persistence(999)).toBe(4);
})

test('Test 3', () => {
  expect(persistence(4)).toBe(0);
})
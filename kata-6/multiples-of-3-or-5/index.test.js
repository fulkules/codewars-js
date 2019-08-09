const solution = require('./index');

test('Test 1', () => {
  expect(solution(10)).toBe(23);
})

test('Test 2', () => {
  expect(solution(16)).toBe(60);
})

test('Test 3', () => {
  expect(solution(6)).toBe(8);
})
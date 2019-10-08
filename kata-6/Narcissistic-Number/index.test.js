const narcissistic = require('./index');

test('Test 1', () => {
    expect(narcissistic(7)).toBe(true);
});
test('Test 2', () => {
    expect(narcissistic(371)).toBe(true);
});
test('Test 3', () => {
    expect(narcissistic(555)).toBe(false);
});

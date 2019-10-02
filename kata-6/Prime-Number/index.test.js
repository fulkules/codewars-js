const optimusPrime = require('./index');

test('Test 1', () => {
    expect(optimusPrime(1)).toBe(false);
});
test('Test 2', () => {
    expect(optimusPrime(2)).toBe(true);
});
test('Test 3', () => {
    expect(optimusPrime(0)).toBe(false);
});
test('Test 4', () => {
    expect(optimusPrime(-1)).toBe(false);
});
test('Test 5', () => {
    expect(optimusPrime(73)).toBe(true);
});
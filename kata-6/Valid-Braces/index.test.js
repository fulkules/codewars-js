const validBraces = require('./index');

test('Test 1', () => {
    expect(validBraces("(){}[]")).toBe(true);
})
test('Test 2', () => {
    expect(validBraces("([{}])")).toBe(true);
})
test('Test 3', () => {
    expect(validBraces("(}")).toBe(false);
})
test('Test 4', () => {
    expect(validBraces("[(])")).toBe(false);
})
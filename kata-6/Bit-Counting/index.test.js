const bits = require('./index');

test('Test 1', () => {
    expect(bits(1234)).toStrictEqual(5);
});

test('Test 2', () => {
    expect(bits(10)).toStrictEqual(2);
});

test('Test 3', () => {
    expect(bits(0)).toStrictEqual(0);
});
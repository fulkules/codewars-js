const count = require('./index');

test('Test 1', () => {
    expect(count("aba")).toStrictEqual({ a: 2, b: 1 });
});

test('Test 2', () => {
    expect(count("")).toStrictEqual({});
});
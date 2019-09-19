const iqTest = require('./index');

test('Test 1', () => {
    expect(iqTest("2 4 6 7 8")).toStrictEqual(4);
});
test('Test 2', () => {
    expect(iqTest("1 2 2")).toStrictEqual(1);
});
test('Test 3', () => {
    expect(iqTest("1 3 5 7 8")).toStrictEqual(5);
});
 
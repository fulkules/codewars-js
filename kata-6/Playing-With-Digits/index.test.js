const digPow = require('./index');

test('Test 1', () => {
    expect(digPow(89, 1)).toStrictEqual(1);
});
test('Test 2', () => {
    expect(digPow(92, 1)).toStrictEqual(-1);
})
test('Test 3', () => {
    expect(digPow(695, 2)).toStrictEqual(2);
});
test('Test 4', () => {
    expect(digPow(46288, 3)).toStrictEqual(51);
});
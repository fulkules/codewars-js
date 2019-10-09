const findUniq = require('./index');

test('Test 1', () => {
    expect(findUniq([1,1,1,2,1,1])).toStrictEqual(2);
});

test('Test 2', () => {
    expect(findUniq([0,0,0.55,0,0])).toStrictEqual(0.55);
});

test('Test 3', () => {
    expect(findUniq([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3])).toStrictEqual(1);
});
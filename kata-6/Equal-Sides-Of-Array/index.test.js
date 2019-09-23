const findEvenIndex = require('./index');

test('Test 1', () => {
    expect(findEvenIndex([1,2,3,4,3,2,1])).toStrictEqual(3);
});

test('Test 2', () => {
    expect(findEvenIndex([1,100,50,-51,1,1])).toStrictEqual(1);
});

test('Test 3', () => {
    expect(findEvenIndex([1,2,3,4,5,6])).toStrictEqual(-1);
});
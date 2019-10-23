const sortArray = require('./index');

test('Test 1', () => {
    expect(sortArray([5,3,2,8,1,4])).toStrictEqual([1,3,2,8,5,4]);
});
test('Test 2', () => {
    expect(sortArray([5,1,5,8,3,5,8,4,6])).toStrictEqual([1,3,5,8,5,5,8,4,6]);
});
test('Test 3', () => {
    expect(sortArray([0,1,10,3,7,8,11])).toStrictEqual([0,1,10,3,7,8,11]);
});
test('Test 4', () => {
    expect(sortArray([])).toStrictEqual([]);
});

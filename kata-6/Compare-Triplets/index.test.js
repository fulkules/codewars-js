const compare = require('./index');

test('Test 1', () => {
    expect(compare([5,6,7],[3,6,10])).toStrictEqual([1,1]);
})
test('Test 2', () => {
    expect(compare([7,8,9],[7,8,11])).toStrictEqual([0,1]);
})
test('Test 3', () => {
    expect(compare([5,6,7],[5,6,7])).toStrictEqual([0,0]);
})


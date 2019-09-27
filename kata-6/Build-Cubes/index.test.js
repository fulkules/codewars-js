const findNb = require('./index');

test('Test 1', () => {
    expect(findNb(4183059834009)).toStrictEqual(2022);
});
test('Test 2', () => {
    expect(findNb(24723578342962)).toStrictEqual(-1);
});
test('Test 3', () => {
    expect(findNb(40539911473216)).toStrictEqual(3568);
});
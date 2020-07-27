const twoOldestAges = require('./index');

describe(twoOldestAges, () => {
    const expected = [8,10];
    test('should return an array containing the two largest nums', () => {
        expect(twoOldestAges([1,2,10,8])).toEqual(expect.arrayContaining([8,10]));
        expect(twoOldestAges([1,2,10,8])).toHaveLength(2);
    });
});
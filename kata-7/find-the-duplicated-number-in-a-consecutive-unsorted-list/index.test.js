const findDup = require('./index');

describe(findDup, () => {
    it('should return a number', () => {
        expect(typeof findDup([1,2,2,3])).toBe('number');
    });
    it('should return the duplicate value from an array of unsorted integers', () => {
        expect(findDup([1,2,2,3])).toStrictEqual(2);
        expect(findDup([1,3,2,5,4,5,7,6])).toStrictEqual(5);
    });
});
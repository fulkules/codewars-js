const getMissingElement = require('./index');

describe(getMissingElement, () => {
    it('should return a number', () => {
        expect(typeof getMissingElement([0,5,1,3,2,9,7,6,4])).toBe('number');
    });
    it('should return the missing number in the array', () => {
        expect(getMissingElement([0,5,1,3,2,9,7,6,4])).toStrictEqual(8);
        expect(getMissingElement([9,2,4,5,7,0,8,6,1])).toStrictEqual(3);
    });
});
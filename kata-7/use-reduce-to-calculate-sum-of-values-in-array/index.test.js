const sum = require('./index');

describe(sum, () => {
    it('should return a number', () => {
        expect(typeof sum([1,2,3,4,5,6,7,8,9,10])).toBe('number');
    });
    it('should return the sum of the array', () => {
        expect(sum([1,2,3,4,5,6,7,8,9,10])).toStrictEqual(55)
    });
});

const sum = require('./index');

describe(sum, () => {
    it('should return an array', () => {
        expect(typeof sum([1,5.2,4,0,-1])).toBe('number');
    });
    it('should return the sum of numbers in a given array', () => {
        expect(sum([])).toStrictEqual(0);
        expect(sum([1,5.2,4,0,-1])).toStrictEqual(9.2);
    });
});
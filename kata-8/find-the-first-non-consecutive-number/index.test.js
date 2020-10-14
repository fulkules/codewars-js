const firstNonConsecutive = require('./index');

describe(firstNonConsecutive, () => {
    it('should return a number', () => {
        expect(typeof firstNonConsecutive([1,2,3,4,6,7,8])).toBe('number');
    });
    it('should return the first non-consecutive number in a given array', () => {
        expect(firstNonConsecutive([1,2,3,4,6,7,8])).toStrictEqual(6);
        expect(firstNonConsecutive([-3,-2,-1,0,2,3])).toStrictEqual(2);
        expect(firstNonConsecutive([1,2,3,4,5])).toStrictEqual(null);
    });
});
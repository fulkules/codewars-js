const halvingSum = require('./index');

describe(halvingSum, () => {
    it('should return a number', () => {
        expect(typeof halvingSum(25)).toBe('number');
    });
    it('should return the sum of half of the argument while halves > 0', () => {
        expect(halvingSum(25)).toStrictEqual(47);
        expect(halvingSum(127)).toStrictEqual(247);
    });
});
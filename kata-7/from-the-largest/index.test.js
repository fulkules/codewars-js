const maxNumber = require('./index');

describe(maxNumber, () => {
    it('should return a number', () => {
        expect(typeof maxNumber(213)).toBe('number');
    });
    it('should return the maximum number that can be formed from a group of numbers', () => {
        expect(maxNumber(213)).toStrictEqual(321);
        expect(maxNumber(7389)).toStrictEqual(9873);
    });
});
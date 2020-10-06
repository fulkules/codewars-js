const reverseNumber = require('./index');

describe(reverseNumber, () => {
    it('should return a number', () => {
        expect(typeof reverseNumber(123)).toBe('number');
    });
    it('should return the number with digits reversed, preserving negatives', () => {
        expect(reverseNumber(123)).toStrictEqual(321);
        expect(reverseNumber(-123)).toStrictEqual(-321);
        expect(reverseNumber(5)).toStrictEqual(5);
        expect(reverseNumber(0)).toStrictEqual(0);
        expect(reverseNumber(4321234)).toStrictEqual(4321234);
    });
});
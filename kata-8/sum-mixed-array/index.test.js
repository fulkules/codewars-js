const sumMix = require('./index');

describe(sumMix, () => {
    it('should return a number', () => {
        expect(typeof sumMix([9, 3, '7', '3'])).toBe('number');
    });
    it('should return the sum of a combination of numbers in both string and num formats', () => {
        expect(sumMix([9, 3, '7', '3'])).toStrictEqual(22);
        expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).toStrictEqual(41);
    });
});
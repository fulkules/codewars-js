const findDigit = require('./index');

describe(findDigit, () => {
    it('should return a number', () => {
        expect(typeof findDigit(123)).toBe('number');
    });
    it('should return the nth digit of num', () => {
        expect(findDigit(5673, 4)).toStrictEqual(5);
        expect(findDigit(129, 2)).toStrictEqual(2);
        expect(findDigit(-456, 4)).toStrictEqual(0);
        expect(findDigit(-2825, 3)).toStrictEqual(8);
        expect(findDigit(24, -8)).toStrictEqual(-1);
    });
});
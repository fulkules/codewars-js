const factorial = require('./index');

describe(factorial, () => {
    it('should return a number', () => {
        expect(typeof factorial(2)).toBe('number');
    });
    it('should return the product of n and all numbers preceding it', () => {
        expect(factorial(2)).toStrictEqual(2);
        expect(factorial(5)).toStrictEqual(120);
        expect(factorial(-1)).toStrictEqual(null);
        expect(factorial(0)).toStrictEqual(1);
    });
});
const multiply = require('./index');

describe(multiply, () => {
    it('should return a number', () => {
        expect(typeof multiply(2,3)).toBe('number');
    });
    it('should return the product of two num args', () => {
        expect(multiply(2,3)).toStrictEqual(6);
    });
});
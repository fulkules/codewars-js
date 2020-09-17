const mygcd = require('./index');

describe(mygcd, () => {
    it('should return a string', () => {
        expect(typeof mygcd(30, 12)).toBe('number');
    });
    it('should return the greatest common divisor of two positive integers', () => {
        expect(mygcd(30, 12)).toStrictEqual(6);
        expect(mygcd(8, 9)).toStrictEqual(1);
    });
});
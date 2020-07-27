const f = require('./index');

describe(f, () => {
    it('should return a number', () => {
        expect(typeof (f(100))).toBe('number');
    });
    it('should return false if arg is not an integer and greater than 0', () => {
        expect((f(0))).toBeFalsy();
        expect(f(3.14)).toBeFalsy();
    });
    it('should return the sum of all numbers up to arg', () => {
        expect(f(100)).toStrictEqual(5050);
        expect(f(300)).toStrictEqual(45150);
    });
});
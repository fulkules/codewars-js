const collatz = require('./index');

describe(collatz, () => {
    it('should return a number', () => {
        expect(typeof collatz(20)).toBe('number');
    });
    it('should return the Collatz Conjecture of a given number', () => {
        expect(collatz(20)).toStrictEqual(8);
        expect(collatz(15)).toStrictEqual(18);
    });
});
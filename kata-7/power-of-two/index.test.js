const isPowerOfTwo = require('./index');

describe(isPowerOfTwo, () => {
    it('should return a boolean', () => {
        expect(typeof(isPowerOfTwo(2))).toBe('boolean');
    });
    it('should return a boolean representing if the arg is an exponentiation of two', () => {
        expect(isPowerOfTwo(2)).toBeTruthy();
        expect(isPowerOfTwo(4096)).toBeTruthy();
        expect(isPowerOfTwo(5)).toBeFalsy();
    });
});
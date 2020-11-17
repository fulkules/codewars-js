const xor = require('./index');

describe(xor, () => {
    it('should return a boolean', () => {
        expect(typeof xor(false, false)).toBe('boolean');
    });
    it('should return true if exactly one of the two expressions are true, otherwise false', () => {
        expect(xor(false, false)).toBe(false);
        expect(xor(true, true)).toBe(false);
        expect(xor(true, false)).toBe(true);
    });
});
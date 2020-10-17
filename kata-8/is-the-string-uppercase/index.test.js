const String = require('.');

describe(String, () => {
    it('should return a boolean', () => {
        expect(typeof ('ABCDEFG'.isUpperCase())).toBe('boolean');
    });
    it('should return true or false based on if whole string is all caps', () => {
        expect('ABCDEFG'.isUpperCase()).toBe(true);
        expect('ABCdeFG'.isUpperCase()).toBe(false);
    });
});
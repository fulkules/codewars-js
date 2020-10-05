const String = require('.');

describe(String, () => {
    it('should return a boolean', () => {
        expect(typeof (''.vowel())).toBe('boolean');
    });
    it('should return whether or not the arg is a vowel', () => {
        expect(''.vowel()).toBeFalsy();
        expect('a'.vowel()).toBeTruthy();
        expect('E'.vowel()).toBeTruthy();
        expect('ou'.vowel()).toBeFalsy();
    });
});

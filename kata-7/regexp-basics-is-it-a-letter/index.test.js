const String = require('.');

describe(String, () => {
    it('should return a boolean', () => {
        expect(typeof (''.isLetter())).toBe('boolean');
    });
    it('should return whether or not the arg is a letter', () => {
        expect(''.isLetter()).toBeFalsy();
        expect('a'.isLetter()).toBeTruthy();
        expect('X'.isLetter()).toBeTruthy();
        expect('7'.isLetter()).toBeFalsy();
        expect('ab'.isLetter()).toBeFalsy();
        expect('*'.isLetter()).toBeFalsy();
    });
});

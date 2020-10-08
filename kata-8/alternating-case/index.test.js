const String = require('.');

describe(String, () => {
    it('should return a string', () => {
        expect(typeof (''.toAlternatingCase())).toBe('string');
    });
    it('should return a string with all chars in alternate case', () => {
        expect('hello WORLD'.toAlternatingCase()).toStrictEqual("HELLO world");
        expect('12345'.toAlternatingCase()).toStrictEqual('12345');
        expect('1a2b3c4d5e'.toAlternatingCase()).toStrictEqual('1A2B3C4D5E');
    });
});
const String = require('.');

describe(String, () => {
    it('should return a string', () => {
        expect(typeof ('test case'.PascalCase())).toBe('string');
    });
    it('should return the string in PascalCase format', () => {
        expect('test case'.PascalCase()).toStrictEqual('TestCase');
        expect('pascal case method'.PascalCase()).toStrictEqual('PascalCaseMethod');
        expect(''.PascalCase()).toStrictEqual('');
    });
});
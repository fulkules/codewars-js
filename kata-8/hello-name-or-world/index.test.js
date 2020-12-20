const hello = require('./index');

describe(hello, () => {
    it('should return a string', () => {
        expect(typeof hello('johN')).toBe('string');
    });
    it('should return a greeting to a name or world (if no name)', () => {
        expect(hello('johN')).toStrictEqual('Hello, John!');
        expect(hello('')).toStrictEqual('Hello, World!');
        expect(hello()).toStrictEqual('Hello, World!');
    });
});
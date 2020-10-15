const doubleChar = require('./index');

describe(doubleChar, () => {
    it('should return a string', () => {
        expect(typeof doubleChar('Hello World')).toBe('string');
    });
    it('should return a new string in which each char from str arg is repeated once', () => {
        expect(doubleChar('Hello World')).toStrictEqual("HHeelllloo  WWoorrlldd");
        expect(doubleChar('%^&*(')).toStrictEqual('%%^^&&**((');
        expect(doubleChar("123456")).toStrictEqual("112233445566");
    });
});
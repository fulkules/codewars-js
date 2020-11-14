const sayHello = require('./index');

describe(sayHello, () => {
    it('should return a string', () => {
        expect(typeof sayHello('Mr. Spock')).toBe('string');
    });
    it('should return ', () => {
        expect(sayHello('Mr. Spock')).toStrictEqual('Hello, Mr. Spock');
    });
});

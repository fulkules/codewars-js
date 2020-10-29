const greet = require('./index');

describe('greet', function() {
    it('should return a string', function() {
        expect(typeof greet('Daniel', 'Daniel')).toBe('string');
    });
    test('returns a personalized greeting string', function() {
        expect(greet('Daniel', 'Daniel')).toStrictEqual('Hello boss');
        expect(greet('Greg', 'Daniel')).toStrictEqual('Hello guest');
    });
});
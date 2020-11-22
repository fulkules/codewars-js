const a = require('./index');

describe('a', function() {
    it('should return a string', function() {
        expect(typeof a(123)).toBe('string');
    });
    it('should return the num as a string', function() {
        expect(a(123)).toStrictEqual('123');
    });
});
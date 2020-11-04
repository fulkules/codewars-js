const name = require('./index');

describe('name', function() {
    it('should return a string', function() {
        expect(typeof name).toBe('string');
    });
    test('returns the joined string from two args', function() {
        expect(name).toStrictEqual('codewa.rs');
    });
});
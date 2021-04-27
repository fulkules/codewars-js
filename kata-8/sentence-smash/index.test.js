const smash = require('./index');

describe('smash', function() {
    it('should return an string', function() {
        expect(typeof smash(['hello', 'world'])).toBe('string');
    });
    test('returns a sentence from the combined words in an array', function() {
        expect(smash(['hello', 'world'])).toStrictEqual('hello world');
    });
});
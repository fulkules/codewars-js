const cleanString = require('./index');

describe('cleanString', function() {
    it('should return a string', function() {
        expect(typeof cleanString('abc#d##c')).toBe('string');
    });
    test('returns', function() {
        expect(cleanString('abc#d##c')).toEqual('ac');
        expect(cleanString('a#bc#d')).toEqual('bd');
        expect(cleanString('abc####d##c#')).toEqual('');
        expect(cleanString('abc##d######')).toEqual('');
        expect(cleanString('#######')).toEqual('');
        expect(cleanString('')).toEqual('');
    });
});
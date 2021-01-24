const replace = require('./index');

describe('replace', function() {
    it('should return a string', function() {
        expect(typeof replace("Hi!")).toBe('string');
    });
    test('returns the new health after subtracting the damage', function() {
        expect(replace("Hi!")).toStrictEqual("H!!");
        expect(replace('aeiou')).toStrictEqual("!!!!!");
        expect(replace("ABCDE")).toStrictEqual("!BCD!");
    });
});
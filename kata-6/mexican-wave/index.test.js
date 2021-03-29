const wave = require('./index');

describe('wave', function() {
    it('should return an array', function() {
        expect(wave('hello')).toBeInstanceOf(Array);
    });
    test('returns an array of strings with an uppercase letter in differing positions throughout the given string', function() {
        expect(wave('hello')).toStrictEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
        expect(wave('two words')).toStrictEqual(['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']);
    });
});
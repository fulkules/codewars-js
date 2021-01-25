const songDecoder = require('./index');

describe('songDecoder', function() {
    it('should return a string', function() {
        expect(typeof songDecoder("AWUBBWUBC")).toBe('string');
    });
    test('returns a decoded string replacing WUB or repeated WUBs with a space and removing leading and trailing spaces', function() {
        expect(songDecoder("AWUBBWUBC")).toStrictEqual("A B C");
        expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toStrictEqual("A B C");
        expect(songDecoder("WUBAWUBBWUBCWUB")).toStrictEqual("A B C");
    });
});
const alphabetWar = require('./index');

describe('alphabetWar', function() {
    it('should return a string', function() {
        expect(typeof alphabetWar("z")).toBe('string');
    });
    test('returns the side of a string that wins', function() {
        expect(alphabetWar("z")).toEqual("Right side wins!");
        expect(alphabetWar("zdqmwpbs")).toEqual("Let's fight again!");
        expect(alphabetWar("wwwwwz")).toEqual("Left side wins!");
    });
});
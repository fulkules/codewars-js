const alphabetPosition = require('./index');

describe('alphabetPosition', function() {
    it('should return a string', function() {
        expect(typeof alphabetPosition("The sunset sets at twelve o' clock.")).toBe('string');
    });
    test('returns a new string with every letter replaced with the position in the alphabet', function() {
        expect(alphabetPosition("The sunset sets at twelve o' clock.")).toStrictEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
        expect(alphabetPosition("The narwhal beacons at midnight.")).toStrictEqual("20 8 5 14 1 18 23 8 1 12 2 5 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
    });
});
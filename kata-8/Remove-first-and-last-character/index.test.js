const removeChar = require('./index');

describe('removeChar', function() {
    it('should return the string without its first and last characters', function() {
        expect(removeChar("eloquent")).toStrictEqual("loquen");
        expect(removeChar("country")).toStrictEqual("ountr");
        expect(removeChar("person")).toStrictEqual("erso");
        expect(removeChar("place")).toStrictEqual("lac");
    });
})
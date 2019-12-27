const century = require('./index');

describe('century', function() {
    it('should return the century from the given year', function() {
        expect(century(1705)).toStrictEqual(18);
        expect(century(1900)).toStrictEqual(19);
        expect(century(1601)).toStrictEqual(17);
        expect(century(2000)).toStrictEqual(20);
        expect(century(89)).toStrictEqual(1);
    });
})
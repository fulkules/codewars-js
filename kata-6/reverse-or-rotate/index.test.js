const revrot = require('./index');

describe('revrot', function () {
    it('should return a string', function () {
        expect(typeof revrot('1234', 2)).toBe('string');
    });

    it('should either reverse or rotate a string appropriately', function () {
        expect(revrot("123456987654", 6)).toStrictEqual("234561876549");
        expect(revrot("664438769", 8)).toStrictEqual("67834466");
        expect(revrot("", 8)).toStrictEqual("");
        expect(revrot("123456779", 0)).toStrictEqual("");
        expect(revrot("563000655734469485", 4)).toStrictEqual("0365065073456944");
    });
});
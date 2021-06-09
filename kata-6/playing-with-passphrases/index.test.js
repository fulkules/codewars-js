const playPass = require('./index');

describe('playPass', function() {
    it('should return a string', function() {
        expect(typeof playPass("I LOVE YOU!!!", 1)).toBe('string');
    });
    test('returns', function() {
        expect(playPass("I LOVE YOU!!!", 1)).toStrictEqual("!!!vPz fWpM J");
        expect(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)).toStrictEqual("4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");
    });
});
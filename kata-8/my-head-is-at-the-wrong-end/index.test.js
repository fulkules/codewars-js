const fixTheMeerkat = require('./index');

describe('fixTheMeerkat', function() {
    it('should return an array', function() {
        expect(fixTheMeerkat(['tail', 'body', 'head'])).toBeInstanceOf(Array);
    });
    test('returns the array of words in the proper order', function() {
        expect(fixTheMeerkat(['tail', 'body', 'head'])).toStrictEqual(['head', 'body', 'tail']);
    });
});
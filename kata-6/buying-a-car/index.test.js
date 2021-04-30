const nbMonths = require('./index');

describe('nbMonths', function() {
    it('should return an array', function() {
        expect(nbMonths(2000, 8000, 1000, 1.5)).toBeInstanceOf(Array);
    });
    test('returns', function() {
        expect(nbMonths(2000, 8000, 1000, 1.5)).toStrictEqual([6, 766]);
        expect(nbMonths(12000, 8000, 1000, 1.5)).toStrictEqual([0, 4000]);
    });
});
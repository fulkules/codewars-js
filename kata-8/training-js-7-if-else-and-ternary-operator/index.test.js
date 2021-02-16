const saleHotdogs = require('./index');

describe('saleHotdogs', function() {
    it('should return a number', function() {
        expect(typeof saleHotdogs(1)).toBe('number');
    });
    test('returns the number that the customer needs to pay', function() {
        expect(saleHotdogs(1)).toStrictEqual(100);
        expect(saleHotdogs(5)).toStrictEqual(475);
        expect(saleHotdogs(10)).toStrictEqual(900);
    });
});
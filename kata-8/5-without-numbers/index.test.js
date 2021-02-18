const unusualFive = require('./index');

describe('unusualFive', function() {
    it('should return a number', function() {
        expect(typeof unusualFive()).toBe('number');
    });
    test('returns a 5 without using (0123456789*+-/)', function() {
        expect(unusualFive()).toStrictEqual(5);
    });
});
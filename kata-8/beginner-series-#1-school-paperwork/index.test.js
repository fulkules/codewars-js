const paperwork = require('./index');

describe('paperwork', function() {
    it('should return a number', function() {
        expect(typeof paperwork(5, 5)).toBe('number');
    });
    test('returns the cm per second rounded down', function() {
        expect(paperwork(5, 5)).toStrictEqual(25);
        expect(paperwork(-1, -1)).toStrictEqual(0);
    });
});
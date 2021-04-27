const tripledouble = require('./index');

describe('tripledouble', function() {
    it('should return an number', function() {
        expect(typeof tripledouble(12345, 12345)).toBe('number');
    });
    test('returns either 0 or 1 depending on triple consecutive digits in n1, and the same double consecutive in n2', function() {
        expect(tripledouble(12345, 12345)).toStrictEqual(0);
        expect(tripledouble(451999277,41177722899)).toStrictEqual(1);
        expect(tripledouble(451999277,41177722899)).toStrictEqual(1);
        expect(tripledouble(1222345,12345)).toStrictEqual(0);
        expect(tripledouble(666789, 12345667)).toStrictEqual(1);
        expect(tripledouble(10560002, 100)).toStrictEqual(1);
        expect(tripledouble(1112, 122)).toStrictEqual(0);
    });
});
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
        expect(tripledouble(7656965333888444, 79591733388)).toStrictEqual(1);
        expect(tripledouble(36833999444555890000, 158139999)).toStrictEqual(1);
        expect(tripledouble(876284999222555100, 7813869911)).toStrictEqual(1);
        expect(tripledouble(2111666282236331, 2483243484666344)).toStrictEqual(1);
        expect(tripledouble(1112, 122)).toStrictEqual(0);
    });
});
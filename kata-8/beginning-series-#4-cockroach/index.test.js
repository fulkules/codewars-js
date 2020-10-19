const cockroachSpeed = require('./index');

describe('cockroachSpeed', function() {
    it('should return a number', function() {
        expect(typeof cockroachSpeed(1.08)).toBe('number');
    });
    test('returns the cm per second rounded down', function() {
        expect(cockroachSpeed(1.08)).toStrictEqual(30);
        expect(cockroachSpeed(0)).toStrictEqual(0);
    });
});
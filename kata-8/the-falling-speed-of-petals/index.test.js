const sakuraFall = require('./index');

describe('sakuraFall', function() {
    it('should return a number', function() {
        expect(typeof sakuraFall(5)).toBe('number');
    });
    test('returns the time it takes for the petal to reach the ground', function() {
        expect(sakuraFall(5)).toStrictEqual(80);
        expect(sakuraFall(10)).toStrictEqual(40);
        expect(sakuraFall(-1)).toStrictEqual(0);
    });
});
const solution = require('./index');

describe('solution', function() {
    it('should return a number', function() {
        expect(typeof solution(1041)).toBe('number');
    });
    test('returns the roman numeral for the given value', function() {
        expect(solution(1041)).toStrictEqual(5);
        expect(solution(32)).toStrictEqual(0);
    });
});
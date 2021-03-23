const solution = require('./index');

describe('solution', function() {
    it('should return a string', function() {
        expect(typeof solution(1)).toBe('string');
    });
    test('returns the roman numeral for the given value', function() {
        expect(solution(1)).toStrictEqual('I');
        expect(solution(3)).toStrictEqual('III');
        expect(solution(7)).toStrictEqual('VII');
        expect(solution(13)).toStrictEqual('XIII');
        expect(solution(23)).toStrictEqual('XXIII');
        expect(solution(1000)).toStrictEqual('M');
        expect(solution(1990)).toStrictEqual('MCMXC');
        expect(solution(2008)).toStrictEqual('MMVIII');
    });
});
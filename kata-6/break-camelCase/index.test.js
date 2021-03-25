const solution = require('./index');

describe('solution', function() {
    it('should return a string', function() {
        expect(typeof solution('camelCase')).toBe('string');
    });
    test('returns a new string separated by camel case words', function() {
        expect(solution('camelCase')).toStrictEqual('camel Case');
        expect(solution('camelCaseTest')).toStrictEqual('camel Case Test');
    });
});
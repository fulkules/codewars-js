const solution = require('./index');

describe(solution, () => {
    it('should return a string', () => {
        expect(typeof solution('22', '1')).toBe('string');
    });
    it('should return one string with the shorter string on the outside and the longer string on the inside', () => {
        expect(solution('22', '1')).toStrictEqual("1221");
        expect(solution('1', '22')).toStrictEqual('1221');
    });
});
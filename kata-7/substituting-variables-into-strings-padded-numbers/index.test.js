const solution = require('./index');

describe(solution, () => {
    it('should return a string', () => {
        expect(typeof solution(5)).toBe('string');
    });
    it('should return a 5 digit padded number as a string', () => {
        expect(solution(5)).toStrictEqual('Value is 00005');
        expect(solution(1204)).toStrictEqual('Value is 01204');
    });
});
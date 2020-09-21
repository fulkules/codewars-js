const pattern = require('./index');

describe(pattern, () => {
    it('should return a string', () => {
        expect(typeof pattern(1)).toBe('string');
    });
    it('should return', () => {
        expect(pattern(1)).toStrictEqual('1');
        expect(pattern(2)).toStrictEqual('21\n2');
        expect(pattern(5)).toStrictEqual('54321\n5432\n543\n54\n5');
    });
});
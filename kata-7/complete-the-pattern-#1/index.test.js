const pattern = require('./index');

describe(pattern, () => {
    it('should return a string', () => {
        expect(typeof pattern(1)).toBe('string');
    });
    it('test 1', () => {
        expect(pattern(0)).toStrictEqual('');
        expect(pattern(1)).toStrictEqual('1');
        expect(pattern(2)).toStrictEqual('1\n22');
        expect(pattern(5)).toStrictEqual('1\n22\n333\n4444\n55555');
    });
});
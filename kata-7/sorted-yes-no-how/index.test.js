const isSortedAndHow = require('./index');

describe(isSortedAndHow, () => {
    it('should return a string', () => {
        expect(typeof(isSortedAndHow([1, 2]))).toBe('string');
    });
    it('should say if an array arg is sorted, and if so, how', () => {
        expect(isSortedAndHow([1, 2])).toStrictEqual('yes, ascending');
        expect(isSortedAndHow([15, 7, 3, -8])).toStrictEqual('yes, descending');
        expect(isSortedAndHow([4, 2, 30])).toStrictEqual('no');
    });
});
const sumOfN = require('./index');

describe(sumOfN, () => {
    it('should return an array', () => {
        expect(sumOfN(3)).toBeInstanceOf(Array);
    });
    it('should return an array of sequence numbers in a pattern', () => {
        expect(sumOfN(3)).toStrictEqual([0,1,3,6]);
        expect(sumOfN(-4)).toStrictEqual([0,-1,-3,-6,-10]);
    });
});
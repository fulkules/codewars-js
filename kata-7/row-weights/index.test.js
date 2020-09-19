const rowWeights = require('./index');

describe(rowWeights, () => {
    it('should return an array', () => {
        expect(rowWeights([50, 60, 70, 80])).toBeInstanceOf(Array);
    });
    it('should return an array with sum of even indices and odd indices', () => {
        expect(rowWeights([39,84,74,18,59,72,35,61])).toStrictEqual([207,235]);
        expect(rowWeights([50, 60, 70, 80])).toStrictEqual([120, 140]);
        expect(rowWeights([100, 50])).toStrictEqual([100, 50]);
        expect(rowWeights([80])).toStrictEqual([80, 0]);
    });
});
const multiples = require('./index');

describe(multiples, () => {
    it('should return an array', () => {
        expect(multiples(3, 5)).toBeInstanceOf(Array);
    });
    it('should return an array of the first m multiples of n', () => {
        expect(multiples(3, 5)).toStrictEqual([5, 10, 15]);
    });
});
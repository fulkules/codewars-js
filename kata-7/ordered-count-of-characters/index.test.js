const orderedCount = require('./index');

describe(orderedCount, () => {
    it('should return an array', () => {
        expect(orderedCount('abracadabra')).toBeInstanceOf(Array);
    });
    it('should return an array of tuples with the ordered count of characters', () => {
        expect(orderedCount('abracadabra')).toStrictEqual([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
    });
});
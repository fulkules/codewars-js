const keysAndValues = require('./index');

describe(keysAndValues, () => {
    it('should return an array', () => {
        expect(keysAndValues({a: 1, b: 2, c: 3})).toBeInstanceOf(Array);
    });
    it('should return an array of arrays; one with keys, the other with values', () => {
        expect(keysAndValues({a: 1, b: 2, c: 3})).toStrictEqual([['a', 'b', 'c'], [1, 2, 3]]);
    });
});
const number = require('./index');

describe(number, () => {
    it('should return an array', () => {
        expect(number(["a", "b", "c"])).toBeInstanceOf(Array);
    });
    it('should return an empty array if arg is empty array', () => {
        expect((number([]))).toStrictEqual([]);
    });
    it('should return an array of strings representing key-values', () => {
        expect(number(["a", "b", "c"])).toStrictEqual(["1: a", "2: b", "3: c"]);
    });
});
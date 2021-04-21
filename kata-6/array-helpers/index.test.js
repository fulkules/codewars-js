const Array = require('.');

describe(Array, () => {
    const numbers = [1, 2, 3, 4, 5];
    const empty = [];
    it('should return an array or number', () => {
        expect(typeof (numbers.average())).toBe('number');
        expect(numbers.cube()).toBeInstanceOf(Array);
    });
    it('should return whether or not the arg is a letter', () => {
        expect(numbers.square()).toStrictEqual([1,4,9,16,25]);
        expect(numbers.cube()).toStrictEqual([1,8,27,64,125]);
        expect(numbers.sum()).toStrictEqual(15);
        expect(empty.average()).toBe(NaN);
        expect(numbers.average()).toStrictEqual(3);
        expect(numbers.even()).toStrictEqual([2,4]);
        expect(numbers.odd()).toStrictEqual([1,3,5]);
    });
});
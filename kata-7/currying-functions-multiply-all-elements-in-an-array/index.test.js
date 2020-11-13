const multiplyAll = require('./index');

describe(multiplyAll, () => {
    it('should return an array', () => {
        expect(multiplyAll([1,2,3])(2)).toBeInstanceOf(Array);
    });
    it('should return a new array with values from first array multiplied by the curried integer', () => {
        expect(multiplyAll([1,2,3])(2)).toStrictEqual([2,4,6]);
        expect(multiplyAll([1, 2, 3])(0)).toStrictEqual([0,0,0]);
    });
});

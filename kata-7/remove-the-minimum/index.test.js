const removeSmallest = require('./index');

describe(removeSmallest, () => {
    test ('test 1', () => {
        expect(removeSmallest([1,2,3,4,5])).toStrictEqual([2,3,4,5]);
        expect(removeSmallest([5,3,2,1,4])).toStrictEqual([5,3,2,4]);
        expect(removeSmallest([2,2,1,2,1])).toStrictEqual([2,2,2,1]);
    })
});
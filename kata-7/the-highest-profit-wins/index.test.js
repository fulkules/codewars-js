const minMax = require('./index');

describe(minMax, () => {
    test ('test 1', () => {
        expect(minMax([1,2,3,4,5])).toEqual([1, 5]);
        expect(minMax([2334454,5])).toEqual([5, 2334454]);
        expect(minMax([1])).toEqual([1,1]);
    })
});
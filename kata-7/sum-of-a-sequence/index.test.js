const sequenceSum = require('./index');

describe(sequenceSum, () => {
    test('test 1', () => {
        expect(sequenceSum(2,2,2)).toEqual(2);
        expect(sequenceSum(1,5,1)).toEqual(15);
        expect(sequenceSum(2,6,2)).toEqual(12);
        expect(sequenceSum(1,5,3)).toEqual(5);
        expect(sequenceSum(3,2,1)).toEqual(0);
    })
});
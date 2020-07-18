const SequenceSum = require('./index');

describe(SequenceSum, () => {
    test('should return the sum of all numbers 0 to arg', () => {
        expect(SequenceSum(6)).toStrictEqual('0+1+2+3+4+5+6 = 21');
        expect(SequenceSum(5)).toStrictEqual('0+1+2+3+4+5 = 15');
        expect(SequenceSum(-15)).toStrictEqual('-15<0');
        expect(SequenceSum(0)).toStrictEqual('0=0');
    });
});
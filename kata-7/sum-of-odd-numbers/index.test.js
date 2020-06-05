const rowSumOddNumbers = require('./index');

describe(rowSumOddNumbers, () => {
    test ('test 1', () => {
        expect(rowSumOddNumbers(1)).toStrictEqual(1);
        expect(rowSumOddNumbers(42)).toStrictEqual(74088);
        expect(rowSumOddNumbers(2)).toStrictEqual(8);
    })
});
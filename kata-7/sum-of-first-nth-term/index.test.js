const seriesSum = require('./index');

describe(seriesSum, () => {
    test ('test 1', () => {
        expect(seriesSum(1)).toStrictEqual("1.00");
        expect(seriesSum(2)).toStrictEqual("1.25");
        expect(seriesSum(3)).toStrictEqual("1.39");
        expect(seriesSum(4)).toStrictEqual("1.49");
    })
});
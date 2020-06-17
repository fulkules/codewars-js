const oddOrEven = require('./index');

describe(oddOrEven, () => {
    test ('test 1', () => {
        expect(oddOrEven([0])).toStrictEqual("even");
        expect(oddOrEven([1])).toStrictEqual("odd");
        expect(oddOrEven([])).toStrictEqual("even");
        expect(oddOrEven([0,1,4])).toStrictEqual("odd");
        expect(oddOrEven([0,-1,-5])).toStrictEqual("even");
    })
});
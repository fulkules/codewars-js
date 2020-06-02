const binaryArrayToNumber = require('./index');

describe(binaryArrayToNumber, () => {
    test ('test 1', () => {
        expect(binaryArrayToNumber([0,0,0,1])).toStrictEqual(1);
        expect(binaryArrayToNumber([0,0,1,0])).toStrictEqual(2);
        expect(binaryArrayToNumber([1,1,1,1])).toStrictEqual(15);
        expect(binaryArrayToNumber([0,1,1,0])).toStrictEqual(6);
    })
});
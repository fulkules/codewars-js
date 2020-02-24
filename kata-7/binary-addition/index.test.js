const addBinary = require('./index');

describe(addBinary, () => {
    test('should return something truthy', () => {
        expect(addBinary(1,2)).toBeTruthy();
    })
    test('should return the sum in binary', () => {
        expect(addBinary(1,2)).toStrictEqual("11");
        expect(addBinary(51,12)).toStrictEqual("111111");
        expect(addBinary(100,0)).toStrictEqual("1100100");
    })
})
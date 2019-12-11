const numberToString = require('./index');

describe('numberToString', function() {
    it('should return a string from a given number', function() {
        expect(numberToString(1234)).toStrictEqual("1234");
        expect(numberToString(999)).toStrictEqual("999");
        expect(numberToString(13)).toStrictEqual("13");
        expect(numberToString(7)).toStrictEqual("7");
    });
})
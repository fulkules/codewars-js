const stringToNumber = require('./index');

describe('stringToNumber', function() {
    it('should return a string from a given number', function() {
        expect(stringToNumber("1234")).toStrictEqual(1234);
        expect(stringToNumber("999")).toStrictEqual(999);
        expect(stringToNumber("13")).toStrictEqual(13);
        expect(stringToNumber("7")).toStrictEqual(7);
    });
})
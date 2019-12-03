const repeatStr = require('./index');

describe('repeatStr', function() {
    it('should return the second arg (str) repeated the first arg (n) times', function() {
        expect(repeatStr(6, "I")).toStrictEqual("IIIIII");
        expect(repeatStr(5, "Hello")).toStrictEqual("HelloHelloHelloHelloHello");
        expect(repeatStr(3, "*")).toStrictEqual("***");
        expect(repeatStr(7, "ha ")).toStrictEqual("ha ha ha ha ha ha ha ");
    });
})
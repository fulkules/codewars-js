const orderWeight = require('./index');

describe('orderWeight', function() {
    it('should reorder the weights based on the sum of its digits', function() {
      expect(orderWeight("56 65 74 100 99 68 86 180 90")).toStrictEqual("100 180 90 56 65 74 68 86 99");
      expect(orderWeight("103 123 4444 99 2000")).toStrictEqual("2000 103 123 4444 99");
      expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toStrictEqual("11 11 2000 10003 22 123 1234000 44444444 9999");
    });
    it('should return an empty string if given empty string', function() {
        expect(orderWeight("")).toStrictEqual("");
    });
});
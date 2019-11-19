const zeros = require('./index');

describe('zeros', function() {
    it('should calculate the number of trailing zeros in a factorial of n', function() {
      expect(zeros(0)).toStrictEqual(0);
      expect(zeros(12)).toStrictEqual(2);
      expect(zeros(5)).toStrictEqual(1);
      expect(zeros(30)).toStrictEqual(7);
    });
});
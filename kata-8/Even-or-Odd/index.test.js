const even_or_odd = require('./index');

describe('even_or_odd', function() {
    it('should return whether a given num is even or odd', function() {
      expect(even_or_odd(2)).toStrictEqual('Even');
      expect(even_or_odd(0)).toStrictEqual('Even');
      expect(even_or_odd(1)).toStrictEqual('Odd');
      expect(even_or_odd(7)).toStrictEqual('Odd');
    });
});
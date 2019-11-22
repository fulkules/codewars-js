const firstNonRepeatingLetter = require('./index');

describe('firstNonRepeatingLetter', function() {
    it('should take in a string and return the first char that is not repeated anywhere in the string', function() {
      expect(firstNonRepeatingLetter('a')).toStrictEqual('a');
      expect(firstNonRepeatingLetter('stress')).toStrictEqual('t');
      expect(firstNonRepeatingLetter('level')).toStrictEqual('v');
      expect(firstNonRepeatingLetter('yobananaboy')).toStrictEqual('');
    });
});
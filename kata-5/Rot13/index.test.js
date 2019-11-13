const rot13 = require('./index');

describe('rot13', function() {
    it('should cipher with capital letters', function() {
      expect(rot13("Test")).toStrictEqual("Grfg");
    });
    it('should cipher with lowercase letters', function() {
        expect(rot13("test")).toStrictEqual("grfg");
    });
});
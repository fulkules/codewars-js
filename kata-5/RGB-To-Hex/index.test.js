const rgb = require('./index');

describe('rgb', function() {
    it('should return a matching hex code to the RGB value', function() {
      expect(rgb(255,255,255)).toStrictEqual("FFFFFF");
      expect(rgb(255,255,300)).toStrictEqual("FFFFFF");
      expect(rgb(0,0,0)).toStrictEqual("000000");
      expect(rgb(148,0,211)).toStrictEqual("9400D3");
      expect(rgb(298,189,10)).toStrictEqual("FFBD0A");
    });
});
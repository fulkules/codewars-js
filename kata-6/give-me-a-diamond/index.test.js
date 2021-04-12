const diamond = require('./index');

describe('diamond', function(){
    it('should return a string', () => {
        expect(typeof diamond(1)).toStrictEqual('string');
    });
    it('should return a string that looks like a diamond shape', () => {
        expect(diamond(0)).toStrictEqual(null);
        expect(diamond(1)).toStrictEqual("*\n");
        expect(diamond(2)).toStrictEqual(null);
        expect(diamond(3)).toStrictEqual(" *\n***\n *\n");
        expect(diamond(-3)).toStrictEqual(null);
        expect(diamond(5)).toStrictEqual("  *\n ***\n*****\n ***\n  *\n");
        expect(diamond(9)).toStrictEqual("   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n");
    });
});

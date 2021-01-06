const countSheep = require('./index');

describe('countSheep', function(){
    it('should return a string', () => {
        expect(typeof countSheep(1)).toStrictEqual('string');
    });
    it('should return a string with all the sheep counted', () => {
        expect(countSheep(1)).toStrictEqual('1 sheep...');
        expect(countSheep(2)).toStrictEqual('1 sheep...2 sheep...');
        expect(countSheep(3)).toStrictEqual('1 sheep...2 sheep...3 sheep...');
    });
});
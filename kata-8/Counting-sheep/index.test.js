const countSheep = require('./index');

describe('countSheep', function() {
    it('should iterate an array of values and determine if any are falsy(missing)', function() {
        expect(countSheep([true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true ])).toStrictEqual(17);
        expect(countSheep([true,true,false,true,false,true,true,false])).toStrictEqual(5);
    });
})

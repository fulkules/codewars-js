const maskify = require('./index');

describe(maskify, () => {
    it ('should return convert all but last 4 characters in a string into #', () => {
        expect(maskify('4556364607935616')).toStrictEqual('############5616');
        expect(maskify('1')).toStrictEqual('1');
        expect(maskify('111111')).toStrictEqual('##1111');
        expect(maskify('Nananananananananananananananana Batman!')).toStrictEqual('####################################man!');
    });
})
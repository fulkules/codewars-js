const filter_list = require('./index');

describe(filter_list, () => {
    it ('should return a list with strings removed', () => {
        expect(filter_list([1,2,'a','b'])).toStrictEqual([1,2]);
        expect(filter_list([1,'a','b',0,15])).toStrictEqual([1,0,15]);
        expect(filter_list([1,2,'aasf','1','123',123])).toStrictEqual([1,2,123]);
    })
})
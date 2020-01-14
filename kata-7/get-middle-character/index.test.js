const getMiddle = require('./index');

describe(getMiddle, () => {
    it ('should return the middle character(s) from the given word', () => {
        expect(getMiddle('test')).toStrictEqual('es');
        expect(getMiddle('middle')).toStrictEqual('dd');
        expect(getMiddle('A')).toStrictEqual('A');
        expect(getMiddle('ABC')).toStrictEqual('B');
    })
})
const evaporator = require('./index');

describe(evaporator, () => {
    it ('test 1', () => {
        expect(evaporator(10,10,10)).toStrictEqual(22);
    })
});
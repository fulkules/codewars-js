const getCount = require('./index');

describe(getCount, () => {
    it ('return the total number of vowels in a given string', () => {
        expect(getCount('abracadabra')).toStrictEqual(5);
        expect(getCount('illinois')).toStrictEqual(4);
        expect(getCount('louisiana')).toStrictEqual(6);
        expect(getCount('my pyx')).toStrictEqual(0);
    })
})
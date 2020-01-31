const mouthSize = require('./index');

describe(mouthSize, () => {
    it ('should return small if given animal is an alligator (case insensitive)', () => {
        expect(mouthSize('toucan')).toStrictEqual('wide');
        expect(mouthSize('ant bear')).toStrictEqual('wide');
        expect(mouthSize('alligator')).toStrictEqual('small');
    })
})
const mouthSize = require('./index');

describe(mouthSize, () => {
    it ('should return the sum of all the numbers up to and including given numbers', () => {
        expect(mouthSize('toucan')).toStrictEqual('wide');
        expect(mouthSize('ant bear')).toStrictEqual('wide');
        expect(mouthSize('alligator')).toStrictEqual('small');
    })
})
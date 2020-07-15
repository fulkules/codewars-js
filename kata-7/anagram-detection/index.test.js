const isAnagram = require('./index');

describe(isAnagram, () => {
    test('should return a boolean of whether or not a string is an anagram', () => {
        expect(isAnagram('foefet', 'toffee')).toBeTruthy();
        expect(isAnagram('Buckethead', 'DeathCubeK')).toBeTruthy();
        expect(isAnagram('Twoo', 'WooT')).toBeTruthy();

        expect(isAnagram('dumble', 'bumble')).toBeFalsy();
        expect(isAnagram('ound', 'round')).toBeFalsy();
        expect(isAnagram('apple', 'pale')).toBeFalsy();
    });
});
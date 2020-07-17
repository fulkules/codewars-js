const sortGiftCode = require('./index');

describe(sortGiftCode, () => {
    test('should return a string in alphabetical order', () => {
        expect(sortGiftCode('abcdef')).toStrictEqual('abcdef');
        expect(sortGiftCode('pqksuvy')).toStrictEqual('kpqsuvy');
        expect(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')).toStrictEqual('abcdefghijklmnopqrstuvwxyz');
    });
});
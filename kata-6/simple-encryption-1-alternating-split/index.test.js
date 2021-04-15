// const encrypt = require('./index');
const decrypt = require('./index');

// describe('encrypt', function(){
//     it('should return a string', () => {
//         expect(typeof encrypt('This is a test!', 1)).toBe('string');
//     });
//     it('should return an encrypted string', () => {
//         expect(encrypt('This is a test!', 1)).toStrictEqual('hsi  etTi sats!');
//         expect(encrypt('This is a test!', 2)).toStrictEqual('s eT ashi tist!');
//         expect(encrypt('', 3)).toStrictEqual('');
//         expect(encrypt('another test', 0)).toStrictEqual('another test');
//     });
// });

describe('decrypt', function(){
    it('should return a string', () => {
        expect(typeof decrypt('hsi  etTi sats!', 1)).toBe('string');
    });
    it('should return an decrypted string', () => {
        expect(decrypt('hsi  etTi sats!', 1)).toStrictEqual('This is a test!');
        expect(decrypt('s eT ashi tist!', 2)).toStrictEqual('This is a test!');
        expect(decrypt('', 3)).toStrictEqual('');
        expect(decrypt('another test', 0)).toStrictEqual('another test');
    });
});

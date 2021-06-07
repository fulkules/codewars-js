// const encode = require('./index');
const { decode, encode } = require('./index');

describe('encode', function(){
    it('should return a string', () => {
        expect(typeof encode('hello', 1)).toBe('string');
    });
    it('should return an encoded string', () => {
        expect(encode('hello', 1)).toStrictEqual('h2ll4');
    });
});

describe('decode', function(){
    it('should return a string', () => {
        expect(typeof decode('h2ll4', 1)).toBe('string');
    });
    it('should return a decoded string', () => {
        expect(decode('h2ll4', 1)).toStrictEqual('hello');
    });
});
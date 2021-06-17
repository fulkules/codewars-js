const kebabize = require('./index');

describe('kebabize', function(){
    it('should return a string', () => {
        expect(typeof kebabize('myCamelCasedString')).toBe('string');
    });
    it('should return', () => {
        expect(kebabize('myCamelCasedString')).toEqual('my-camel-cased-string');
        expect(kebabize('myCamelHas3Humps')).toEqual('my-camel-has-humps');
    });
});
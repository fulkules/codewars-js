const greet = require('./index');

describe('greet', function() {
    it('should return a hello world string', function() {
        expect(greet()).toStrictEqual("hello world!");
        
    });
})
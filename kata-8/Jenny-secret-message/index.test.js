const greet = require('./index');

describe('greet', function() {
    it('should have a special greeting for Johnny', function() {
        expect(greet("Johnny")).toStrictEqual("Hello, my love!");
    });
    it('should have a simple greeting for everyone else', function() {
        expect(greet("Jack")).toStrictEqual("Hello, Jack!");
    });
})
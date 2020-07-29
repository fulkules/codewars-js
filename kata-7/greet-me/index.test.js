const greet = require('./index');

describe(greet, () => {
    it('should return a string', () => {
        expect(typeof greet("JACK")).toBe('string');
    });
    it('should return a new string greeting with name arg first letter in caps while the rest are lower case', () => {
        expect((greet("JACK"))).toStrictEqual("Hello Jack!");
        expect((greet("maverick"))).toStrictEqual("Hello Maverick!");
    });
});
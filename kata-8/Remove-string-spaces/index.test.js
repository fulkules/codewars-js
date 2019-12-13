const noSpace = require('./index');

describe('noSpace', function() {
    it('should remove the spaces from the string, then return the resultant string', function() {
        expect(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")).toStrictEqual("8j8mBliB8gimjB8B8jlB");
        expect(noSpace('8aaaaa dddd r     ')).toStrictEqual("8aaaaaddddr");
    });
})

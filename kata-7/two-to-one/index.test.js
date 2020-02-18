const longest = require('./index');

describe(longest, () => {
    it ('should return a new sorted string of distinct letters from the given strings', () => {
        expect(longest('aretheyhere', 'yestheyarehere')).toStrictEqual("aehrsty");
        expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toStrictEqual("abcdefghilnoprstu");
        expect(longest("inmanylanguages", "theresapairoffunctions")).toStrictEqual("acefghilmnoprstuy");
    });
    
})
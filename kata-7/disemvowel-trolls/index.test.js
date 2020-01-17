const disemvowel = require('./index');

describe(disemvowel, () => {
    it ('should return the given string with all vowels removed', () => {
        expect(disemvowel('This website is for losers LOL!')).toStrictEqual('Ths wbst s fr lsrs LL!');
        expect(disemvowel('Get a life wierdo')).toStrictEqual('Gt  lf wrd');
        expect(disemvowel('Eat rat poison and sit on a pin!')).toStrictEqual('t rt psn nd st n  pn!');
    })
})
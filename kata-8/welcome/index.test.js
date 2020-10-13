const greet = require('./index');

describe(greet, () => {
    it('should return a string', () => {
        expect(typeof greet('english')).toBe('string');
    });
    it('should return the proper greeting from the given language arg', () => {
        expect(greet('english')).toStrictEqual('Welcome');
        expect(greet('mandarin')).toStrictEqual('Welcome');
        expect(greet('czech')).toStrictEqual('Vitejte');
        expect(greet('danish')).toStrictEqual('Velkomst');
        expect(greet('estonian')).toStrictEqual('Tere tulemast');
        expect(greet('finnish')).toStrictEqual('Tervetuloa');
        expect(greet('flemish')).toStrictEqual('Welgekomen');
        expect(greet('french')).toStrictEqual('Bienvenue');
        expect(greet('german')).toStrictEqual('Willkommen');
        expect(greet('irish')).toStrictEqual('Failte');
        expect(greet('italian')).toStrictEqual('Benvenuto');
        expect(greet('latvian')).toStrictEqual('Gaidits');
        expect(greet('lithuanian')).toStrictEqual('Laukiamas');
        expect(greet('polish')).toStrictEqual('Witamy');
        expect(greet('spanish')).toStrictEqual('Bienvenido');
        expect(greet('swedish')).toStrictEqual('Valkommen');
        expect(greet('welsh')).toStrictEqual('Croeso');
    });
});
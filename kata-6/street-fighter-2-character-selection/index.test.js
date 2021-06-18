const streetFighterSelection = require('./index');

describe(streetFighterSelection, () => {
    const fighters = [
        ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
        ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ];

    let moves = [];

    it('should return an array', () => {
        expect(streetFighterSelection(fighters, [0,0], moves)).toBeInstanceOf(Array);
    });

    it('should work with no moves', () => {
        moves = [];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual([]);
    });

    it('should work with a few moves', () => {
        moves = ['up', 'left', 'right', 'left', 'left'];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual(['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
    });

    it('should work with all left moves', () => {
        moves = ["left","left","left","left","left","left","left","left"];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual(['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);
    });

    it('should work with all right moves', () => {
        moves = ["right","right","right","right","right","right","right","right"];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual(['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
    });

    it('should work with all down moves', () => {
        moves = ["down","down","down","down"];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual(['Ken', 'Ken', 'Ken', 'Ken']);
    });

    it('should work with all up moves', () => {
        moves = ["up","up","up","up"];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual(['Ryu', 'Ryu', 'Ryu', 'Ryu']);
    });

    it('should work with all four directions used twice', () => {
        moves = ["up","left","down","right","up","left","down","right"];
        expect(streetFighterSelection(fighters, [0,0], moves)).toEqual(['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
    });
});
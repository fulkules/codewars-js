const foldArray = require('./index');

describe(foldArray, () => {
    it('should return an array', () => {
        expect(foldArray([ 1, 2, 3, 4, 5 ], 1)).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(foldArray([ 1, 2, 3, 4, 5 ], 1)).toEqual([ 6, 6, 3 ]);
        expect(foldArray([ 1, 2, 3, 4, 5 ], 2)).toEqual([ 9, 6 ]);
        expect(foldArray([ 1, 2, 3, 4, 5 ], 3)).toEqual([ 15 ]);
        expect(foldArray([ -9, 9, -8, 8, 66, 23 ], 1)).toEqual([ 14, 75, 0 ]);
    });
});
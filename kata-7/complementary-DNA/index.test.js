const DNAStrand = require('./index');

describe(DNAStrand, () => {
    test ('should return a complimentary DNA string A to T, C to G, and vice versa', () => {
        expect(DNAStrand("AAAA")).toStrictEqual("TTTT");
        expect(DNAStrand("ATTGC")).toStrictEqual("TAACG");
        expect(DNAStrand("GTAT")).toStrictEqual("CATA");
    })
})
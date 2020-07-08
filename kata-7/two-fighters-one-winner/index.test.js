const { Fighter, declareWinner } = require('.');

describe(declareWinner, () => {
    it ('should return the name of the winning fighter', () => {
        expect(declareWinner(
            new Fighter("Lew", 10, 2),
            new Fighter("Harry", 5, 4),
            "Lew")
        ).toStrictEqual("Lew");
        expect(declareWinner(
            new Fighter("Lew", 10, 2),
            new Fighter("Harry", 5, 4),
            "Harry")
        ).toStrictEqual("Harry");
        expect(declareWinner(
            new Fighter("Coyote", 30, 3),
            new Fighter("RoadRunner", 20, 5),
            "Coyote")
        ).toStrictEqual("RoadRunner");
        expect(declareWinner(
            new Fighter("Coyote", 30, 3),
            new Fighter("RoadRunner", 20, 5),
            "RoadRunner")
        ).toStrictEqual("RoadRunner");

    });
});
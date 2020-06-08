const friend = require('./index');

describe(friend, () => {
    test ('test 1', () => {
        expect(friend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
        expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toStrictEqual(["Ryan"]);
        expect(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).toStrictEqual(["Jimm", "Cari", "aret"]);
        expect(friend(["Love", "Your", "Face", "1"])).toStrictEqual(["Love", "Your", "Face"]);
    })
});
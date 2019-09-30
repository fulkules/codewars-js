const toCamelCase = require('./index');

test('Test 1', () => {
    expect(toCamelCase("the-stealth-warrior")).toStrictEqual("theStealthWarrior");
});

test('Test 2', () => {
    expect(toCamelCase("The-Stealth-Warrior")).toStrictEqual("TheStealthWarrior"); // technically this is PascalCase, but it was part of the challenge
});

test('Test 3', () => {
    expect(toCamelCase("A-B-C")).toStrictEqual("ABC");
});


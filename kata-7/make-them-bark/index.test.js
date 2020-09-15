const Dog = require('.');

test('it should return a string', () => {
    const apollo = new Dog('Apollo', 'Boerboel', 'male', '2');
    expect(typeof apollo.bark()).toBe('string');
});

test('it should return "Woof!" when bark is invoked on the prototype', () => {
    const zeus = new Dog('Zeus', 'Cane Corso', 'male', '4');
    expect(zeus.bark()).toStrictEqual('Woof!');
});
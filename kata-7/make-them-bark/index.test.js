const Dog = require('.');

test('Test 1', () => {
    const apollo = new Dog('Apollo', 'Boerboel', 'male', '2');
    expect(typeof apollo.bark()).toBe('string');
});

test('Test 2', () => {
    const zeus = new Dog('Zeus', 'Cane Corso', 'male', '4');
    expect(zeus.bark()).toStrictEqual('Woof!');
});
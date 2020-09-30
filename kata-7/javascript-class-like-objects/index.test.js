const Animal = require('.');

describe(Animal, () => {
    test('test 1', () => {
        const dog = new Animal('Olaf', 'dog');

        expect(dog.toString()).toBe('Olaf is a dog');
        expect(dog.type).toBe('dog');
        expect(dog.name).toBe('Olaf');

        dog.name = 'Phoebe';
        expect(dog.name).toBe('Phoebe');
    })
});

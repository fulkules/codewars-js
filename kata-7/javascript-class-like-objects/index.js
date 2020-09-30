// For this exercise you should create a JavaScript class like object
// called "Animal" that takes in "name" and "type" arguments. It should
// have a toString method that returns a human readable string indicating
// the argument information passed in. It should also allow the name
// property to be set.
//
//     The following is an example of how the final code would be used
// and what the expected return values should be:
//
//     var dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'


class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    toString(){
        const {name, type} = this;
        return `${name} is a ${type}`
    }
}

// best practice -- also should read directions more carefully
// appropriate solution is CLASS-LIKE, but not a class

// const Animal = function(name, type) {
//   this.name = name;
//   this.type = type;
// }
// Animal.prototype.toString = function() {
//   return this.name + ' is a ' + this.type;
// }


module.exports = Animal;
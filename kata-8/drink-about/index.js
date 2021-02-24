// Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.
//     Make a function that receive age, and return what they drink.
//
//     Rules:
//
// Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.
//     Examples:
//
// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"



function peopleWithAgeDrink(old){
    if(old < 14) return 'drink toddy';
    else if(old < 18) return 'drink coke';
    else if(old < 21) return 'drink beer';
    else return 'drink whisky';
}

// es6 single liner
// const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky');

// interesting approach
// var peopleWithAgeDrink = function(old) {
//   var groups = [
//     [14, "toddy"],
//     [18, "coke"],
//     [21, "beer"],
//     [999, "whisky"]
//   ];
//   for(var i = 0; i < groups.length; i++){
//     var group = groups[i];
//     if(old < group[0]){
//        return "drink "+group[1];
//     }
//   }
// };

// switch case
// const peopleWithAgeDrink = (age) => {
//   switch (true) {
//     case (age >= 21): return 'drink whisky'
//     case (age >= 18): return 'drink beer'
//     case (age >= 14): return 'drink coke'
//     default: return 'drink toddy'
//   }
// };

module.exports = peopleWithAgeDrink;
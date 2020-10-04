// The function is not returning the correct values. Can you figure out why?
//
//     getPlanetName(3); // should return 'Earth'



// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//             name = 'Mercury';
//         case 2:
//             name = 'Venus';
//         case 3:
//             name = 'Earth';
//         case 4:
//             name = 'Mars';
//         case 5:
//             name = 'Jupiter';
//         case 6:
//             name = 'Saturn';
//         case 7:
//             name = 'Uranus';
//         case 8:
//             name = 'Neptune';
//     }
//
//     return name;
// }

function getPlanetName(id){
    switch(id){
        case 1:
            return 'Mercury';
            break;
        case 2:
            return 'Venus';
            break;
        case 3:
            return 'Earth';
            break;
        case 4:
            return 'Mars';
            break;
        case 5:
            return 'Jupiter';
            break;
        case 6:
            return 'Saturn';
            break;
        case 7:
            return 'Uranus';
            break;
        case 8:
            return 'Neptune';
            break;
    }
}

// alternate solution
// function getPlanetName(id){
//   return {
//     1: 'Mercury',
//     2: 'Venus',
//     3: 'Earth',
//     4: 'Mars',
//     5: 'Jupiter',
//     6: 'Saturn',
//     7: 'Uranus',
//     8: 'Neptune'
//   }[id]
// }

module.exports = getPlanetName;
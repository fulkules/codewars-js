// Create a function that returns the name of the winner in a fight between two fighters.
//
//     Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//
//     Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//
//     Example:
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

// fn(obj, obj, str) => str
// find the fighter that is first attacker
//  f1 attacks f2
    // subtract f1 damage from f2
// f2 attacks f1
    // subtract f2 dmg from f1
// once f1 or f2 health is <= 0
    // return the other as winner

// helper object creator
class Fighter {
    constructor(name, health, damagePerAttack){
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name };
    }
}

function declareWinner(f1, f2, attacker){
    while (f1.health > 0 && f2.health > 0){
        f2.health -= f1.damagePerAttack;
        f1.health -= f2.damagePerAttack;
    }

    if (f1.health <= 0 && f2.health <= 0) return attacker;
    else if (f1.health <= 0) return f2.name;
    else return f1.name;
}

// pure function example -- separation of concerns
// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let attacker = (fighter1.name === firstAttacker)
//         ? fighter1
//         : fighter2;
//
//     function noOneWins(){
//         return ((fighter1.health > 0) && (fighter2.health > 0));
//     }
//
//     function getNextAttacker(attacker){
//         return (attacker === fighter1) ? fighter2 : fighter1;
//     }
//
//     function getDefender(attacker){
//         return getNextAttacker(attacker);
//     }
//
//     function killRound(attacker){
//         let defender = getDefender(attacker);
//         defender.health -= attacker.damagePerAttack;
//     }
//
//     function getWinner(){
//         return (fighter1.health > 0)
//             ? fighter1.name
//             : fighter2.name;
//     }
//
//     while(noOneWins()) {
//         killRound(attacker);
//         attacker=getNextAttacker(attacker);
//     }
//
//     return getWinner();
// }

// best practice no need to play through every round
// const declareWinner = (fighter1, fighter2, firstAttacker) => {
//   const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
//   const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
//   return f1 < f2 ? fighter2.name : (f2 < f1 ? fighter1.name : firstAttacker)
// }

module.exports = { Fighter, declareWinner };
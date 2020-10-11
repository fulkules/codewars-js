// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples:
//
//     rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// fn(str, str) => str
//

const rps = (p1, p2) => {
    if(p1 === p2) return 'Draw!';

    if(
        (p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'paper' && p2 === 'rock')
    )
        return 'Player 1 won!';

    if(
        (p2 === 'scissors' && p1 === 'paper') ||
        (p2 === 'rock' && p1 === 'scissors') ||
        (p2 === 'paper' && p1 === 'rock')
    )
        return 'Player 2 won!';
};

// clever solution
// const rps = (p1, p2) =>
//   p1 === p2
//     ? 'Draw!'
//     : `Player ${
//         /rockscissors|scissorspaper|paperrock/.test(`${p1}${p2}`) ? 1 : 2
//       } won!`

// best practice
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//      return "Player 2 won!";
//   }
// };

module.exports = rps;
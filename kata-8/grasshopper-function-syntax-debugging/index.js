// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// function main [verb, noun]
//      return verb + noun
// }


/****************   DON'T LOOK AHEAD UNTIL YOU HAVE DEBUGGED THE FUNCTION ABOVE  ****************/


function main(verb, noun){
    return `${verb}${noun}`;
}

// alternate solution
// const main = (...a) => a.join('');

module.exports = main;
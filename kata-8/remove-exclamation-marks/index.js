// Write function RemoveExclamationMarks which removes all
// exclamation marks from a given string.



const removeExclamationMarks = s => s.replace(/!/g, '');

// alternate solution without regex
// const removeExclamationMarks = s => s.split('!'.join('');

module.exports = removeExclamationMarks;
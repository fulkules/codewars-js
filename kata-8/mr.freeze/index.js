// There is an object/class already created called MrFreeze.
// Mark this object as frozen so that no other changes can be made to it.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

const MrFreeze = {};

Object.freeze(MrFreeze);

// Function Export
module.exports = MrFreeze;
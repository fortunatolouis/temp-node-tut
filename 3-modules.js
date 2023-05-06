// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)
console.log(sayHi)
const data = require('./6-alternative-flavor')
console.log(data)

///////////////////////
// when you import a module you invoke it
require('./7-mind-grenade')
///////////////////////

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
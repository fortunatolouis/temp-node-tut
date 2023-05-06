// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// kind of irrelevant with npx
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything defualt)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log('hello people')
// npm install will install dependencies
// located in the current directory's package.json
// to the current dir
// which is why we need to save package.json to root

// npm i <packageName> -D to install devDependencies
// used while creating app
// not used by app itself, so user of the app would not need it

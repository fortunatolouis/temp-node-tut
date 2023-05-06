const {readFileSync,writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next task')

// equivalent code would be ...

// const fs = require('fs')
// const first_2 = fs.readFileSync('./content/first.txt','utf8')
// const second_2 = fs.readFileSync('./content/second.txt','utf8')

// fs.writeFileSync(
//     './content/result-sync-2.txt',
//     `Here is the other result : ${first_2}, ${second_2}`
//     )
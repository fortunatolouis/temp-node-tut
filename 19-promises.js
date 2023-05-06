// const {readFile,writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// better yet, we don't even need to promisify
// since fs has a submodule promises
// which promisifies the readFile and writeFile functions
const {readFile,writeFile} = require('fs').promises;

// promisify will do what below code did.
// instead of read file, return a new promise that resolves 
// data parm of readFile's callback function

// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))

const start = async() => {
    try {
        // const first = await readFilePromise('./content/first.txt','utf8')
        // const second = await readFilePromise('./content/second.txt','utf8')
        // await writeFilePromise('./content/result-mind-grenade.txt',
        // `this is awesome : ${first} ${second}`)
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-grenade.txt',
        `this is awesome : ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
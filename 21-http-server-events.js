const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.write('Welcome to our home page')
//     res.end()
// })

// const server = http.createServer((req,res)=>{
//     res.end('Welcome')
// })

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome welcome welcome')
})
// class http.Server extends class EventEmitter
// has the on method with the 'request' event

server.listen(5000)
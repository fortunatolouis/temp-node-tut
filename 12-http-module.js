const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.write('Welcome to our home page')
//     res.end()
// })

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        // you can cheat and skip res.write('...'); res.end();
        res.end('Welcome to our home page')
        // these returns weren't in the tutorial and kind of confused me
        return
    }
    if(req.url === '/about') {
        res.end('Here is a short history')
        // return here
        return
    }
    res.end(`
    <h1>Oops!</h1?
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back to home</a>
    `)
})

server.listen(5000)
const EventEmitter = require('events');

const customEmitter = new EventEmitter()
// customEmitter.emit('response')
// order matters, can't emit before listening for response
// first argument string is the name of the event, second is the cb
customEmitter.on('response',(name,id) => {
    console.log(`data received ${name} with id ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here `)
})
// can take args
customEmitter.emit('response','john',34)
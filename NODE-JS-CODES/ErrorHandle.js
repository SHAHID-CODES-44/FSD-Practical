const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('error', (err) => {
    console.log();
    console.error('An err occured', err.message);
    console.log();

})

emitter.emit('error', new Error('Something went Wrong'));
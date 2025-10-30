const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();

emitter.on('userJoined', (username, userID) => {
    console.log(`${username}, (${userID}) has joined the chat`);
});

emitter.emit('userJoined', 'Shahid', 29);
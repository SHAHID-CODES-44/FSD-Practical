const EventEmitter = require("events");
const colors = require('colors');
const myEmitter = new EventEmitter();

myEmitter.on('start', (data) => {
    console.log();
    console.log('1 -->'.yellow,'Listener 01 triggered for "start": ', data);
    myEmitter.emit('process', `Processed: ${data}`);
});

myEmitter.on('start', (data) => {
    console.log();
    console.log('2 -->'.yellow,'Listener 02 triggered for "start":Logging audit: ', data);
});

myEmitter.on('process', (info) => {
    console.log();
    console.log('3 -->'.yellow,'Processing Complete: ', info);
    myEmitter.emit('end', 'All Tasks Done !');
});

myEmitter.on('end', (msg) => {
    console.log();
    console.log('4 -->'.yellow,'End event recieved: ', msg);
});

myEmitter.emit('start', 'Data Recieved from user Input');
console.log();


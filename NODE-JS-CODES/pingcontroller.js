// pingcontroller.js

const { formatlog } = require('./logger');  // Make sure this path is correct

const getping = (req, res) => {
    console.log(formatlog('get /ping called'));
    res.send('pong');
};

const getroot = (req, res) => {
    console.log(formatlog('get / called'));
    res.send('Logger service running!');
};

module.exports.pingcontroller = {
    getping,
    getroot
};

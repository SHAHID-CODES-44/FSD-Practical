const os = require('os');

const freeMemBytes = os.freemem();
const freeMemGb = (freeMemBytes / (1024 ** 3)).toFixed(2);
console.log('Platform: ', os.platform());
console.log('Free Memory: ', freeMemGb, "TB");


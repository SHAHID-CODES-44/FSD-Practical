const path = require('path');
module.exports = {
   target: 'node',
   entry: './index.js',
   output: {filename: 'project2_bundle.js',
   path: path.resolve(__dirname, 'dist'),
   },
};
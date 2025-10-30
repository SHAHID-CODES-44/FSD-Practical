const { URL } = require('url');

const myUrl = new URL('http://www.google.com/?name=shahid');

console.log('Host:', myUrl.host); 
console.log('Name:', myUrl.searchParams.get('name'));

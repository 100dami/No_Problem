const crypto = require('crypto');

// sha512 ? 해시 알고리즘 중 하나
// .digest() ? 인코딩 
console.log('base64: ', crypto.createHash('sha512').update('1234').digest('base64'));
console.log('hex: ',crypto.createHash('sha512').update('1234').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('5678').digest('base64'));
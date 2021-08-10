const fs = require('fs');

const readStream = fs.createReadStream('test4.txt');
const writeStream = fs.createWriteStream('test3.txt');
readStream.pipe(writeStream);
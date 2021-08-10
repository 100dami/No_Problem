const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('이건 비밀번호다!', 'utf-8', 'base64');
result+= cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf-8');
result2+= decipher.final('utf-8');
console.log('복호화:', result2);

const fs = require('fs');

fs.writeFile('./writetxt.txt', '이건 write file 이다 **', (err) => {
    if(err) {
        throw(err);
    }
    fs.readFile('./writetxt.txt', (err, data) => {
        if(err) {
            throw(err);
        }
        console.log(data);
        console.log(data.toString());
    });
});
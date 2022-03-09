const fs = require('fs');
const read = fs.createReadStream('file.txt', 'utf8');
read.on('data', (chunk) => {
    console.log(chunk);
})
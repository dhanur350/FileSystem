const fs = require('fs');
const read = fs.createReadStream('file.txt', 'utf8');
const write = fs.createWriteStream('file1.txt');
read.on('data', (chunk) => {
    console.log(chunk);
})
read.on('data', (chunk) => {
    write.write(chunk);
})
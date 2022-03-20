const fs = require('fs');
const fname = 'file.txt';
fs.writeFile(fname, 'Hello bhai', function (err, file) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`File created and written succesfully ${fname} ${file}`);
    }
})
const read = fs.createReadStream('file.txt', 'utf-8');
read.on('data', function (chunk) {
    console.log(chunk);
});
const write = fs.createWriteStream('file1.txt');
read.on('data', (chunk) => {
    write.write(chunk);
});
read.pipe(write);
console.log('File successfully piped and content copied');
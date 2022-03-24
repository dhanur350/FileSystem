const fs = require('fs');//import package fs
const zlib = require('zlib'); // import package zlib to compress
const gzip = zlib.createGzip(); //called a function to compress a file
const readStream = fs.createReadStream('file.txt', 'utf8'); // created a read stream 
const writeStream = fs.createWriteStream('file1.txt.gz');// write stream as compressed file .gz
readStream.pipe(gzip).pipe(writeStream); //now piped a file to a compressed file .gz
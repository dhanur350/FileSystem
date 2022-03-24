const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('file1.txt.gz');
const writeStream = fs.createWriteStream('uncompress.txt');
readStream.pipe(gunzip).pipe(writeStream);

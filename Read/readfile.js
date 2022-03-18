//To see difference we'll see what readfile function and readstream function does
//If we use readfile it'll not read file which is very very large, i.e. because it's buffer size is small 
const fs = require('fs');
//But if we use readstream it'll read a large file upto 2GB or more till it finished reading
const readstrm = fs.createReadStream('sample-2mb-text-file.txt', 'utf8');
readstrm.on('data', function (err, chunk) {
    if (err) {
        throw (err);
    }
    else {
        console.log(chunk);
    }
})
/**Basically a readstream uses a buffer but in small sizes i.e. in chunks so 
 * everytime we'll use readstream it'll not read entire file at once it'll read file
 * in chunks so it'll read a large file easily..
 */
/*fs.readFile('sample-2mb-text-file.txt', 'utf-8', function (err, file) {
    if (err) {
        throw (err);
    }
    else {
        console.log(file);
    }
})*/
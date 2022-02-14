const fs = require('fs');
fs.rename('samplefile.txt','samplefile1.txt',err=>{
    if (err) {
        throw(err);
    }
    console.log("File renamed successfully");
});
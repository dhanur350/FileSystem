const fs = require('fs');
fs.unlink('file.txt', (err) => {
    if (err) {
        throw (err);
    }
    console.log("File deleted");
})
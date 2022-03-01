const fs = require('fs');
//Code to remove everything in directory
//Try this , Create two .txt files or anything and run command node rmvevery.js
fs.readdir('./New Folder', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        //console.log(files);
        for (let file of files) {
            fs.unlink('./New Folder/' + file, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File Successfully Deleted');
                }
            })
        }
    }
})
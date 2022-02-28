const fs = require('fs');
fs.mkdir('New Folder', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder Created Successfully');
    }
})
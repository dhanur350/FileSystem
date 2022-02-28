const fs = require('fs');
fs.rmdir('New Folder', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully deleted folder');
    }
})
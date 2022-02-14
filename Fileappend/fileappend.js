const fs = require('fs');
const content = '\nThis_is_2nd_next_line';
fs.appendFile('file.txt',content, function(err){
    if(err){
        console.log("Something goes wrong",err);
    }
    console.log("File appended");
});
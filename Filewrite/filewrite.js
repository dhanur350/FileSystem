const fs = require('fs');
//const readVar = require('readline-sync');
//const readFile = require('./Fileread');
const content = '\nThis_is_2nd_next_line';
//String(readline.question());
/*fs.writeFile('file.txt',content,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File modified successfully");
})*/
fs.appendFile('file.txt',content, function(err){
    if(err){
        console.log("Something goes wrong");
    }
    return true;
});
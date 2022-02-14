const fs = require('fs');

fs.open('newFile.txt','w',function(err,file){
    if(err){
        console.log("Something went wrong",err);
    }
    console.log("File created successfully");
});
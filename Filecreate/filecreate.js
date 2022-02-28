const fs = require('fs');
fs.writeFile('file1.txt', 'content written', (err) => {
    if (err)
        console.log(err);
    else {
        fs.readFile('file1.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(file);
            }
        })
        console.log("File Successfully created");
    }
})
/*fs.open('newFile.txt','w',function(err,file){
    if(err){
        console.log("Something went wrong",err);
    }
    console.log("File created successfully");
});*/
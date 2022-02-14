const http = require("http");
let fs = require("fs");
http.createServer(function (request, response) {
  fs.readFile('file.txt',function(err,data){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(data);
    return response.end();
  });
  console.log("Listening to Port 8080");
}).listen(8080);
module.exports(fs.readFile);
/*  fs.readFile('file.txt',
    function (err, data) {
      response.writeHead;
      200, { "Content-type": "text/html" });
    };
});*/
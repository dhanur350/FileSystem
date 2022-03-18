const fs = require('fs');
const http = require('http');
http.createServer(function (request, response) {
    fs.readFile('file.txt', (err, file) => {
        if (err) {
            throw (err);
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write("<h1>" + file + "</h1>");
        }
        return response.end();
    })
}).listen(8080);
console.log("Listening to port 8080");
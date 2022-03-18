let fs = require('fs');
fs.readFile('file.txt', 'utf-8', function (err, data) {
  if (err) {
    throw (err);
  }
  else {
    console.log(data);
  }
});
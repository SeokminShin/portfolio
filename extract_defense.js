const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('/Users/ss/Desktop/SD Kang/Format_SS/231120SS_Defense.pdf');
pdf(dataBuffer).then(function(data) {
  console.log(data.text.substring(0, 15000));
}).catch(err => console.error(err));

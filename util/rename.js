var fs = require('fs');
var path = require('path');
var dir = './test/js'
fs.readdirSync(dir).forEach(file =>{
    var prefix = file.split('.')[0];
    fs.rename(path.resolve(dir, file), path.resolve(dir, prefix + ".ts"))
});
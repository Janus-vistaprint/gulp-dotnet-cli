var fs = require('fs');
var prefix =  './src/builders'
var files = fs.readdirSync(prefix);

files.forEach(element => {
    fs.rename(`${prefix}/${element}`, `${prefix}/${element.split('.')[0]}.ts`);
});
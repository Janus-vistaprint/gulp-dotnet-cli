var fs = require('fs');
var prefix =  './src'
var files = fs.readdirSync(prefix);

files.filter(element=>element.split('.').length > 1).forEach(element => {
    fs.rename(`${prefix}/${element}`, `${prefix}/${element.split('.')[0]}.ts`);
});
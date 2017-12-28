var fs = require('fs');
var path = require('path');


var walkSync = function(dir, filelist) {
    var path = path || require('path');
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};


var filelist = walkSync(path.resolve(__dirname,'../../dist'));

filelist.forEach(file =>{
    if(file.includes("d.ts") || file.includes(".map")){
        return;
    }
    console.log(file);
    require(file);
})
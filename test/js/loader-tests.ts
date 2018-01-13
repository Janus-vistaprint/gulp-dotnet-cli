import * as fs from "fs";
import * as path from "path";

// tslint:disable-next-line:no-shadowed-variable
let walkSync = (dir: any, filelist: any) => {
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach((file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        } else {
            filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};

let filelist = walkSync(path.resolve(__dirname, "../../src"), null);

filelist.forEach((file: string) => {
    if (file.includes("d.ts") || file.includes(".map")) {
        return;
    }
    console.log(file);
    require(file);
});

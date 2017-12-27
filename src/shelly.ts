<<<<<<< a1f46cf183b835b256bf02bd3f47d5cf22119ef1:src/shelly.js
let through = require('through2');
let gutil = require('gulp-util');
let PluginError = gutil.PluginError;
let cp = require('child-process-promise');
let _ = require('lodash');
let path = require('path');
=======
/// <reference path="./declarations/child-process-promise.d.ts" />

import * as through from 'through2';
import * as guitl from 'gulp-util';
let PluginError = guitl.PluginError;
import * as cp from 'child-process-promise';
import * as _ from 'lodash';
import { Transform } from 'stream';
>>>>>>> sthap:src/shelly.ts
// Consts
const PLUGIN_NAME = 'gulp-dotnet-cli';


// Plugin level function(dealing with files)
/*
 * Wrapper over through2 to execute commands with promises
 * @param {string} command the root command to run usually dotnet
 * @param {string|Array<string>} noun The action to take build, push, pack, etc
 * @param {Array<String>} args the arguments to pass such as ['--verbosity', 'normal'] 
 * @param {boolean} echo Should the command be printed to the console?
 * @param {boolean} optional default false, if true sets the current working directory to the files directory.
*/
<<<<<<< a1f46cf183b835b256bf02bd3f47d5cf22119ef1:src/shelly.js
function shelly(command, noun, args, echo, setCwd = false) {
=======
export default function shelly(command:string, noun:string|Array<string>, args:Array<any>, echo: Boolean = false) {
>>>>>>> sthap:src/shelly.ts
    if (!_.isArray(args)) {
        throw new PluginError(PLUGIN_NAME, 'Arguments has to be an array');
    }
    // Creating a stream through which each file will pass
    return through.obj(function (file, enc, cb) {
        if (!file.path) {
            // return empty file
            return cb(null, file);
        }
        let calculatedArgs = _.concat([], noun, file.path, args);
        if(echo){
            console.log(`${command} ${calculatedArgs.join(' ')}`);
        }
<<<<<<< a1f46cf183b835b256bf02bd3f47d5cf22119ef1:src/shelly.js
        var options = { stdio: 'inherit' };
        if(setCwd){
             options.cwd = path.dirname(file.path);
        }
        cp.spawn(command, calculatedArgs, options)
                .then(a=>cb(null, file))
                .catch(ex => cb(ex, file));
=======
        cp.spawn(command, calculatedArgs, { stdio: 'inherit' })
                .then((a:any)=>cb(null, file))
                .catch((ex: any) => cb(ex, file));
>>>>>>> sthap:src/shelly.ts

    });

}
// tslint:disable-next-line:no-reference
/// <reference path="./declarations/child-process-promise.d.ts" />

import * as cp from "child-process-promise";
import * as path from "path";
import * as PluginError from "plugin-error";
import { Transform } from "stream";
import * as through from "through2";
// Consts
const PLUGIN_NAME = "gulp-dotnet-cli";

// Plugin level function(dealing with files)
/*
 * Wrapper over through2 to execute commands with promises
 * @param {string} command the root command to run usually dotnet
 * @param {string|Array<string>} noun The action to take build, push, pack, etc
 * @param {Array<String>} args the arguments to pass such as ['--verbosity', 'normal']
 * @param {boolean} echo Should the command be printed to the console?
 * @param {boolean} optional default false, if true sets the current working directory to the files directory.
*/
// tslint:disable-next-line:max-line-length
export default function shelly(command: string, noun: string|string[], args: any[], echo: boolean = false, setCwd: boolean = false) {
    if (!command) {
        throw new PluginError(PLUGIN_NAME, "command not passed");
    }
    if (!noun) {
        throw new PluginError(PLUGIN_NAME, "noun not passed");
    }
    if (!Array.isArray(args)) {
        throw new PluginError(PLUGIN_NAME, "Arguments has to be an array");
    }
    // Creating a stream through which each file will pass
    return through.obj(function(this: Transform, file, enc, cb) {
        if (!file || !file.path) {
            // return empty file
            return cb(null, file);
        }
        const calculatedArgs = ([] as string[]).concat(noun, file.path, args);
        if (echo) {
            console.log(`${command} ${calculatedArgs.join(" ")}`);
        }
        const options = { stdio: "inherit" } as any;
        if (setCwd) {
             options.cwd = path.dirname(file.path);
        }
        cp.spawn(command, calculatedArgs, options)
                .then((a: any) => cb(null, file))
                .catch((ex: Error) => {
                    let pluginError = new PluginError(PLUGIN_NAME, `failed to ${noun}`);
                    this.emit("error", pluginError);
                    cb(pluginError, file);
                })
                // emit will trick node in thinking we have unhandled promise rejections
                // tslint:disable-next-line:no-empty
                .catch((ex) => { });

    });

}

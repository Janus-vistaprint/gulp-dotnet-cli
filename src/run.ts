import { IRunModel } from './schema/interfaces/IRunModel';
import shelly from './shelly';
import * as stream from 'stream';
import runArgBuilder from './builders/runArgBuilder';

export default (options : IRunModel) => {
    let calculatedArgs = runArgBuilder(options);
    
    //Run assumes the current directory without the project flag
    // assume usage of the flag so it has a gulp-y behavior 
    return shelly('dotnet', ['run', '--project'], calculatedArgs, options.echo, true) as stream.Transform;

};

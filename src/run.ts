import * as stream from "stream";
import runArgBuilder from "./builders/runArgBuilder";
import { IRunModel } from "./schema/interfaces/IRunModel";
import shelly from "./shelly";

export default (options?: IRunModel) => {
    options = options || {};
    const calculatedArgs = runArgBuilder(options);
    // Run assumes the current directory without the project flag
    // assume usage of the flag so it has a gulp-y behavior
    return shelly("dotnet", ["run", "--project"], calculatedArgs, options.echo || false, true) as stream.Transform;

};

import * as stream from "stream";
import cleanArgBuilder from "./builders/cleanArgBuilder";
import { ICleanModel } from "./schema/interfaces/ICleanModel";
import shelly from "./shelly";

export default (options?: ICleanModel) => {
    options = options || {};
    const calculatedArgs = cleanArgBuilder(options);
    return shelly("dotnet", "clean", calculatedArgs, options.echo || false) as stream.Transform;

};

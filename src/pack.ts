import * as stream from "stream";
import argBuilder from "./builders/packArgBuilder";
import packArgBuilder from "./builders/packArgBuilder";
import { IPackModel } from "./schema/interfaces/IPackModel";
import shelly from "./shelly";

export default (options?: IPackModel) => {
    options = options || {};
    const calculatedArgs = packArgBuilder(options);

    return shelly("dotnet", "pack", calculatedArgs, options.echo || false) as stream.Transform;

};

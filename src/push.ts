import * as stream from "stream";
import nugetPushArgBuilder from "./builders/nugetPushArgBuilder";
import { INugetPushModel } from "./schema/interfaces/INugetPushModel";
import shelly from "./shelly";

export default (options?: INugetPushModel) => {
    options = options || {};
    const calculatedArgs = nugetPushArgBuilder(options);
    return shelly("dotnet", ["nuget", "push"], calculatedArgs, options.echo || false) as stream.Transform;

};

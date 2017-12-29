import * as stream from "stream";
import * as through2 from "through2";
import argBuilder from "./builders/buildArgBuilder";
import buildArgBuilder from "./builders/buildArgBuilder";
import { IBuildModel } from "./schema/interfaces/IBuildModel";
import shelly from "./shelly";

export default (options: IBuildModel) => {
    const calculatedArgs = buildArgBuilder(options);
    return shelly("dotnet", "build", calculatedArgs, options.echo) as stream.Transform;

};

import * as stream from "stream";
import restoreArgBuilder from "./builders/restoreArgBuilder";
import { IRestoreModel } from "./schema/interfaces/IRestoreModel";
import shelly from "./shelly";

export default (options: IRestoreModel) => {
    const calculatedArgs = restoreArgBuilder(options);
    return shelly("dotnet", "restore", calculatedArgs, options.echo) as stream.Transform;

};

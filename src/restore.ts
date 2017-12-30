import * as stream from "stream";
import restoreArgBuilder from "./builders/restoreArgBuilder";
import { IRestoreModel } from "./schema/interfaces/IRestoreModel";
import shelly from "./shelly";

export default (options?: IRestoreModel) => {
    options = options || {};
    const calculatedArgs = restoreArgBuilder(options);
    return shelly("dotnet", "restore", calculatedArgs, options.echo || false) as stream.Transform;

};

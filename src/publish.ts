import * as stream from "stream";
import publishArgBuilder from "./builders/publishArgBuilder";
import { IPublishModel } from "./schema/interfaces/IPublishModel";
import shelly from "./shelly";

export default (options?: IPublishModel) => {
    options = options || {};
    const calculatedArgs = publishArgBuilder(options);
    return shelly("dotnet", "publish", calculatedArgs, options.echo || false) as stream.Transform;

};

import * as stream from "stream";
import testArgBuilder from "./builders/testArgBuilder";
import { ITestModel } from "./schema/interfaces/ITestModel";
import shelly from "./shelly";

export default (options?: ITestModel) => {
    options = options || {};
    const calculatedArgs = testArgBuilder(options);
    return shelly("dotnet", "test", calculatedArgs, options.echo || false) as stream.Transform;

};

import { ICleanModel } from "../schema/interfaces/ICleanModel";

/**
 * calculates clean arguments
 * @param {ICleanModel} value - the value to clean arguments off of.
 */
export default (value: ICleanModel) => {
    let args: any[] = [];
    if (!value) {
        return args;
    }
    if (value.output) {
        args = args.concat(["--output", value.output]);
    }
    if (value.framework) {
        args = args.concat(["--framework", value.framework]);
    }
    if (value.runtime) {
        args = args.concat(["--runtime", value.runtime]);
    }
    if (value.configuration) {
        args = args.concat(["--configuration", value.configuration]);
    }
    if (value.verbosity) {
        args = args.concat(["--verbosity", value.verbosity]);
    }
    if (value.msbuildArgs) {
        args = args.concat(value.msbuildArgs);
    }
    if (value.version) {
        args = args.concat(`/p:Version=${value.version}`);
    }
    return args;
};

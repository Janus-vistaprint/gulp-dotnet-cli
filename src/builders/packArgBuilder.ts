import { IPackModel } from "../schema/interfaces/IPackModel";
export default (value: IPackModel) => {
    let args: Array<string|boolean> = [];
    if (!value) {
        return args;
    }
    if (value.output) {
        args = args.concat(["--output", value.output]);
    }
    if (value.noBuild) {
        args = args.concat(["--no-build"]);
    }
    if (value.noDependencies) {
        args = args.concat(["--no-dependencies"]);
    }
    if (value.noRestore) {
        args = args.concat(["--no-restore"]);
    }
    if (value.includeSymbols) {
        args = args.concat(["--include-symbols"]);
    }
    if (value.includeSource) {
        args = args.concat(["--include-source"]);
    }
    if (value.configuration) {
        args = args.concat(["--configuration", value.configuration]);
    }
    if (value.versionSuffix) {
        args = args.concat(["--version-suffix", value.versionSuffix]);
    }
    if (value.serviceable) {
        args = args.concat(["--serviceable"]);
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

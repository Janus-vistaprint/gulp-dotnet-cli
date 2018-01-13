import { IRestoreModel } from "../schema/interfaces/IRestoreModel";

export default (value: IRestoreModel) => {
    let args: Array<string|boolean|number> = [];
    if (!value) {
        return args;
    }
    if (value.source) {
        args = args.concat(Array.isArray(value.source)
            ? value.source.map((source: string) => ["--source", source]).reduce((a, b) => a.concat(b), [])
            : ["--source", value.source]);
    }
    if (value.runtime) {
        args = args.concat(["--runtime", value.runtime]);
    }
    if (value.packages) {
        args = args.concat(["--packages", value.packages]);
    }
    if (value.disableParallel) {
        args = args.concat(["--disable-parallel"]);
    }
    if (value.configfile) {
        args = args.concat(["--configfile", value.configfile]);
    }
    if (value.noIncremental) {
        args = args.concat(["--no-incremental"]);
    }
    if (value.noDependencies) {
        args = args.concat(["--no-dependencies"]);
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

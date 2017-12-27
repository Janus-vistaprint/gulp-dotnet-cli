import * as _ from 'lodash'

export interface IRestoreBuilder{
    verbosity: string,
    msbuildArgs: Array<string>,
    version: string,
    source: Array<string> | string,
    runtime: string,
    packages: string,
    disableParallel: boolean,
    configfile: string,
    noIncremental: boolean,
    noDependencies: boolean,
    echo: boolean

}

export default (value: IRestoreBuilder) => {
    let args : Array<string|boolean|Number> = [];
    if(!value){
        return args;
    }
    if (value.source) {
        args = args.concat(_.isArray(value.source) 
            ? _.chain(value.source).map((source: string) => ['--source', source]).flatten().value()
            : ['--source', value.source]);
    }
    if (value.runtime) {
        args = args.concat(['--runtime', value.runtime]);
    }
    if (value.packages) {
        args = args.concat(['--packages', value.packages]);
    }
    if (value.disableParallel) {
        args = args.concat(['--disable-parallel']);
    }
    if (value.configfile) {
        args = args.concat(['--configfile', value.configfile]);
    }
    if (value.noIncremental) {
        args = args.concat(['--no-incremental']);
    }
    if (value.noDependencies) {
        args = args.concat(['--no-dependencies']);
    }
    if (value.verbosity) {
        args = args.concat(['--verbosity', value.verbosity]);
    }
    if (value.msbuildArgs) {
        args = args.concat(value.msbuildArgs);
    }
    if (value.version) {
        args = args.concat(`/p:Version=${value.version}`);
    }
    return args;
};
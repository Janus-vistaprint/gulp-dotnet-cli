export interface ITestModel{
    settings: string,
    listTests: boolean,
    filter: string,
    testAdapterPath: string,
    logger: string,
    configuration: string,
    framework: string,
    output: string,
    diag: string,
    noBuild : boolean,
    verbosity: string,
    additionalArgs: Array<string>,
    echo: boolean
}

export default (value: ITestModel) => {
    let args : Array<any> = [];
    if(!value){
        return args;
    }
    if (value.settings) {
        args = args.concat(['--settings', value.settings]);
    }
    if (value.listTests) {
        args = args.concat(['--list-tests']);
    }
    if (value.filter) {
        args = args.concat(['--filter', value.filter]);
    }
    if (value.testAdapterPath) {
        args = args.concat(['--test-adapter-path', value.testAdapterPath]);
    }
    if (value.logger) {
        args = args.concat(['--logger', value.logger]);
    }
    if (value.configuration) {
        args = args.concat(['--configuration', value.configuration]);
    }
    if (value.framework) {
        args = args.concat(['--framework', value.framework]);
    }
    if (value.output) {
        args = args.concat(['--output', value.output]);
    }
    if (value.diag) {
        args = args.concat(['--diag', value.diag]);
    }
    if (value.noBuild) {
        args = args.concat(['--no-build']);
    }
    if (value.verbosity) {
        args = args.concat(['--verbosity', value.verbosity]);
    }
    if (value.additionalArgs) {
        args = args.concat(value.additionalArgs);
    }
    return args;
};
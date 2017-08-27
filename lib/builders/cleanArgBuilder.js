
/**
 * calculates build arguments
 * @param {CleanModel} value - the value to build arguments off of.
 */
let build = (value) => {
    let args = [];
    if(!value){
        return args;
    }
    if (value.output) {
        args = args.concat(['--output', value.output]);
    }
    if (value.framework) {
        args = args.concat(['--framework', value.framework]);
    }
    if (value.runtime) {
        args = args.concat(['--runtime', value.runtime]);
    }
    if (value.configuration) {
        args = args.concat(['--configuration', value.configuration]);
    }
    if (value.verbosity) {
        args = args.concat(['--verbosity', value.verbosity]);
    }
    return args;
};

module.exports = build;
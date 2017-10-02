
/**
 * calculates run arguments
 * @param {RunModel} value - the value to run arguments off of.
 */
let run = (value) => {
    let args = [];
    if(!value){
        return args;
    }    
    if (value.configuration) {
        args = args.concat(['--configuration', value.configuration]);
    }
    if (value.framework) {
        args = args.concat(['--framework', value.framework]);
    }
    if (value.project) {
        args = args.concat(['--project', value.project]);
    }
    if (value.runtime) {
        args = args.concat(['--runtime', value.runtime]);
    }    
    if (value.launchProfile) {
        args = args.concat(['--launch-profile', value.launchProfile]);
    }    
    if (value.noLaunchProfile) {
        args = args.concat(['--no-launch-profile', value.noLaunchProfile]);
    }    
    if (value.noBuild) {
        args = args.concat(['--no-build', value.noBuild]);
    }    
    if (value.noRestore) {
        args = args.concat(['--no-restore', value.noRestore]);
    }    
    if (value.noDependencies) {
        args = args.concat(['--no-dependencies', value.noDependencies]);
    }    
    if (value.force) {
        args = args.concat(['--force', value.force]);
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

module.exports = run;
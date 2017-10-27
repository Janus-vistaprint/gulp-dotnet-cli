const Joi = require('joi');
/* Represents a run model */
class RunModel {
  /**
   * Create the validation model
   */
    constructor() {
        this.configuration = Joi.string().description('Configuration to use for building the project. Default for most projects is  "Debug"');
        this.framework = Joi.string().description('Target framework to build for. The target framework has to be specified in the project file.');
        this.runtime = Joi.string().description('Target runtime to build for. The default is to build a portable application.');

        this.launchProfile = Joi.string().description('The name of the launch profile (if any) to use when launching the application.');
        this.noLaunchProfile = Joi.string().description('Do not attempt to use launchSettings.json to configure the application.');
        this.noBuild = Joi.string().description('Skip building the project prior to running. By default, the project will be built.');
        this.noRestore = Joi.string().description('Does not do an implicit restore when executing the command.');
        this.noDependencies = Joi.string().description('Set this flag to ignore project to project references and only restore the root project.');
        this.force = Joi.string().description('Set this flag to force all dependencies to be resolved even if the last restore was successful. This is equivalent to deleting project.assets.json.');
        
        this.verbosity = Joi.string().only('quiet', 'minimal', 'normal', 'detailed', 'diagnostic');
        this.echo = Joi.boolean().default(false).description('Log the command to the console');
        this.version = Joi.string().description('Sets the $(Version) property in msbuild');
        this.msbuildArgs = Joi.array().items(Joi.string()).description('DEPRICATED - Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options');
        this.additionalArgs = Joi.array().items(Joi.string()).description('Any options that should be passed to the program when it is run.');
    }

}

module.exports = RunModel;

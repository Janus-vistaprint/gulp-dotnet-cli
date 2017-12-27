import * as Joi from 'joi'
export default class PackModel  implements Joi.SchemaMap {
    [key: string]: string | number | boolean | object | Joi.SchemaMap | Joi.AnySchema | Joi.ArraySchema | Joi.AlternativesSchema | Joi.BinarySchema | Joi.BooleanSchema | Joi.DateSchema | Joi.FunctionSchema | Joi.NumberSchema | Joi.ObjectSchema | Joi.StringSchema | Joi.LazySchema | Joi.SchemaLike[] | null;
    version: Joi.StringSchema;
    msbuildArgs: Joi.ArraySchema;
    echo: Joi.BooleanSchema;
    serviceable: Joi.BooleanSchema;
    verbosity: Joi.StringSchema;
    versionSuffix: Joi.StringSchema;
    configuration: Joi.StringSchema;
    includeSource: Joi.BooleanSchema;
    includeSymbols: Joi.BooleanSchema;
    noBuild: Joi.BooleanSchema;
    output: Joi.StringSchema;
  /**
   * Create the validation model
   */
    constructor() {
        this.output = Joi.string().description('Directory in which to place built packages.');
        this.noBuild = Joi.boolean().description('Skip building the project prior to packing. By default, the project will be built.');
        this.includeSymbols = Joi.boolean().description('Include packages with symbols in addition to regular packages in output directory.');
        this.noDependencies = Joi.boolean().description('Set this flag to ignore project to project references and only restore the root project.');
        this.noRestore = Joi.boolean().description('Does not do an implicit restore when executing the command.');
        this.includeSource = Joi.boolean().description('Include PDBs and source files. Source files go into the src folder in the resulting nuget package');
        this.configuration = Joi.string().description('Configuration to use for building the project.  Default for most projects is  "Debug"');
        this.versionSuffix = Joi.string().description('Defines the value for the $(VersionSuffix) property in the project.');
        this.serviceable = Joi.boolean().description('Set the serviceable flag in the package. For more information, please see https://aka.ms/nupkgservicing');
        this.verbosity = Joi.string().only('quiet', 'minimal', 'normal', 'detailed', 'diagnostic');
        this.echo = Joi.boolean().default(false).description('Log the command to the console');
        this.msbuildArgs = Joi.array().items(Joi.string()).description('Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options');
        this.version = Joi.string().description('Sets the nuget package version');

    }

}
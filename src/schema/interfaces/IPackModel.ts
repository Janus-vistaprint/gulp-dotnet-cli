/**
 *
 *
 * @export
 * @interface IPackModel
 */
export interface IPackModel {
    /**
     * Directory in which to place built packages.
     *
     * @type {string}
     * @memberof IPackModel
     */
    output?: string;
    /**
     * Skip building the project prior to packing. By default, the project will be built.
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    noBuild?: boolean;
    /**
     * Include packages with symbols in addition to regular packages in output directory.
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    includeSymbols?: boolean;
    /**
     * Include PDBs and source files. Source files go into the src folder in the resulting nuget package
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    includeSource?: boolean;
    /**
     * Configuration to use for building the project. Default for most projects is "Debug"
     *
     * @type {string}
     * @memberof IPackModel
     */
    configuration?: string;
    /**
     * Defines the value for the $(VersionSuffix) property in the project.
     *
     * @type {string}
     * @memberof IPackModel
     */
    versionSuffix?: string;
    /**
     * Set the serviceable flag in the package. For more information, please see https?://aka.ms/nupkgservicing
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    serviceable?: boolean;
    /**
     *  Set this flag to ignore project to project references and only restore the root project.
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    noDependencies?: boolean;
    /**
     * Does not do an implicit restore when executing the command.
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    noRestore?: boolean;
    /**
     * sets the console verbosity. valid values?: 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
     *
     * @type {string}
     * @memberof IPackModel
     */
    verbosity?: string;
    /**
     * Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options
     *
     * @type {Array<string>}
     * @memberof IPackModel
     */
    msbuildArgs?: string[];
    /**
     * Sets the $(Version) property in msbuild
     *
     * @type {string}
     * @memberof IPackModel
     */
    version?: string;
    /**
     * Log the command to the console
     *
     * @type {boolean}
     * @memberof IPackModel
     */
    echo?: boolean;
}


/**
 *
 *
 * @export
 * @typedef {IBuildModel}
 * @interface IBuildModel
 */
export interface IBuildModel {
    /**
     *
     * Output directory in which to place built artifacts
     * @type {string}
     * @memberof IBuildModel
     */
    output?: string;
    /**
 *
     *  Target framework to build for. The target framework has to be specified in the project file.
     * @type {string}
     * @memberof IBuildModel
     */
    framework?: string;
    /**
     *
     * Target runtime to build for. The default is to build a portable application.
     * @type {string}
     * @memberof IBuildModel
     */
    runtime?: string;
    /**
     *
     * Configuration to use for building the project. Default for most projects is  "Debug"
     * @type {string}
     * @memberof IBuildModel
     */
    configuration?: string;
    /**
     *
     * Defines the value for the $(VersionSuffix) property in the project
     * @type {string}
     * @memberof IBuildModel
     */
    versionSuffix?: string;
    /**
     *
     * Disables incremental build.
     * @type {boolean}
     * @memberof IBuildModel
     */
    noIncremental?: boolean;
    /**
     *
     * Set this flag to ignore project-to-project references and only build the root project
     * @type {boolean}
     * @memberof IBuildModel
     */
    noDependencies?: boolean;
    // todo?: figure out the common things and make a base interface
    // also convert verbosities into an enum
    /**
     *
     * sets the console verbosity. valid values?: 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
     * @type {string}
     * @memberof IBuildModel
     */
    verbosity?: string;
    /**
     *
     * Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options
     * @type {Array<string>}
     * @memberof IBuildModel
     */
    msbuildArgs?: string[];
    /**
     *
     * Sets the $(Version) property in msbuild
     * @type {string}
     * @memberof IBuildModel
     */
    version?: string;
    /**
     *
     *  Log the command to the console
     * @type {true}
     * @memberof IBuildModel
     */
    echo?: true;
}


/**
 *
 *
 * @export
 * @interface ICleanModel
 */
export interface ICleanModel {
    /**
     *
     *   Output directory in which to place built artifacts
     * @type {string}
     * @memberof ICleanModel
     */
    output?: string;
    /**
     *
     * Target framework to build for. The target framework has to be specified in the project file.
     * @type {string}
     * @memberof ICleanModel
     */
    framework?: string;
    /**
     *
     * Target runtime to build for. The default is to build a portable application.
     * @type {string}
     * @memberof ICleanModel
     */
    runtime?: string;
    /**
     *
     *  Configuration to use for building the project. Default for most projects is  "Debug"
     * @type {string}
     * @memberof ICleanModel
     */
    configuration?: string;
    /**
     *
     * sets the console verbosity. valid values?: 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
     * @type {string}
     * @memberof ICleanModel
     */
    verbosity?: string;
    /**
     *
     *  Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options
     * @type {Array<string>}
     * @memberof ICleanModel
     */
    msbuildArgs?: string[];
    /**
     *
     * Sets the $(Version) property in msbuild
     * @type {string}
     * @memberof ICleanModel
     */
    version?: string;
    /**
     *
     * Log the command to the console
     * @type {boolean}
     * @memberof ICleanModel
     */
    echo?: boolean;
}

/**
 *
 * @export
 * @interface IPublishModel
 */
export interface IPublishModel {
    /**
     * Output directory in which to place built artifacts
     *
     * @type {string}
     * @memberof IPublishModel
     */
    output?: string;
    /**
     * Configuration to use for building the project. Default for most projects is  "Debug"
     *
     * @type {string}
     * @memberof IPublishModel
     */
    configuration?: string;
    /**
     *
     * Defines the value for the $(VersionSuffix) property in the project
     * @type {string}
     * @memberof IPublishModel
     */
    versionSuffix?: string;
    /**
     *
     * sets the console verbosity. valid values?: 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
     * @type {string}
     * @memberof IPublishModel
     */
    verbosity?: string;
    /**
     *
     * Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options
     * @type {Array<string>}
     * @memberof IPublishModel
     */
    msbuildArgs?: string[];
    /**
     *
      Sets the $(Version) property in msbuild
     * @type {string}
     * @memberof IPublishModel
     */
    version?: string;
    /**
     *
     * Target framework to build for. The target framework has to be specified in the project file.
     * @type {string}
     * @memberof IPublishModel
     */
    framework?: string;
    /**
     *
     * Target runtime to build for. The default is to build a portable application.
     * @type {string}
     * @memberof IPublishModel
     */
    runtime?: string;
    /**
     *
     *  Log the command to the console
     * @type {boolean}
     * @memberof IPublishModel
     */
    echo?: boolean;
}

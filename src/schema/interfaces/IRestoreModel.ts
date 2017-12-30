/**
 *
 *
 * @export
 * @interface IRestoreModel

 */
export interface IRestoreModel {
    /**
     *
     * Specifies a NuGet package source to use during the restore.
     * @type {(Array<string> | string)}
     * @memberof IRestoreModel
     */
    source?: string[] | string;
    /**
     *
     * Target runtime to restore packages for
     * @type {string}
     * @memberof IRestoreModel
     */
    runtime?: string;
    /**
     * Directory to install packages in.
     *
     * @type {string}
     * @memberof IRestoreModel
     */
    packages?: string;
    /**
     *
     * Disables restoring multiple projects in parallel.
     * @type {boolean}
     * @memberof IRestoreModel
     */
    disableParallel?: boolean;
    /**
     *
     * The NuGet configuration file to use

     * @type {string}
     * @memberof IRestoreModel
     */
    configfile?: string;
    /**
     *
     * @type {boolean}
     * @memberof IRestoreModel
     */
    noIncremental?: boolean;
    /**
      Set this flag to ignore project to project references and only restore the root project
     *
     * @type {boolean}
     * @memberof IRestoreModel
     */
    noDependencies?: boolean;
    /**
     *
     * sets the console verbosity. valid values?: 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
     * @type {string}
     * @memberof IRestoreModel
     */
    verbosity?: string;
    /**
     *
     * Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options
     * @type {Array<string>}
     * @memberof IRestoreModel
     */
    msbuildArgs?: string[];
    /**
     *
     * Sets the $(Version) property in msbuild
     * @type {string}
     * @memberof IRestoreModel
     */
    version?: string;
    /**
     *
     * Log the command to the console
     * @type {boolean}
     * @memberof IRestoreModel
     */
    echo?: boolean;

}

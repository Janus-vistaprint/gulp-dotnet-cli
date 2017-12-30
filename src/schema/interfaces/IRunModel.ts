/**
 *
 *
 * @export
 * @interface IRunModel
 */
export interface IRunModel {
    /**
     * The name of the launch profile (if any) to use when launching the application

     *
     * @type {string}
     * @memberof IRunModel
     */
    launchProfile?: string;
    /**
     * Do not attempt to use launchSettings.json to configure the application

     *
     * @type {boolean}
     * @memberof IRunModel
     */
    noLaunchProfile?: boolean;
    /**
     * Skip building the project prior to running. By default, the project will be built.

     *
     * @type {boolean}
     * @memberof IRunModel
     */
    noBuild?: boolean;
    /**
     * Does not do an implicit restore when executing the command

     *
     * @type {boolean}
     * @memberof IRunModel
     */
    noRestore?: boolean;
    /**
     * Set this flag to ignore project to project references and only restore the root project.

     *
     * @type {boolean}
     * @memberof IRunModel
     */
    noDependencies?: boolean;
    /**
     * Target framework to build for. The target framework has to be specified in the project file.

     *
     * @type {string}
     * @memberof IRunModel
     */
    framework?: string;
    /**
     * Target runtime to build for. The default is to build a portable application.

     *
     * @type {string}
     * @memberof IRunModel
     */
    runtime?: string;
    /**
     * Configuration to use for building the project. Default for most projects is  "Debug"

     *
     * @type {string}
     * @memberof IRunModel
     */
    configuration?: string;
    /**
     * Set this flag to force all dependencies to be resolved even if the last restore was successful.
     *  This is equivalent to deleting project.assets.json.
     *
     * @type {boolean}
     * @memberof IRunModel
     */
    force?: boolean;
    /**
     * sets the console verbosity

     *
     * @type {string}
     * @memberof IRunModel
     */
    verbosity?: string;
    /**
     * Any extra options that should be passed to the program being run
     *
     * @type {Array<string>}
     * @memberof IRunModel
     */
    additionalArgs?: string[];
    /**
     * Log the command to the console
     *
     * @type {boolean}
     * @memberof IRunModel
     */
    echo?: boolean;
}

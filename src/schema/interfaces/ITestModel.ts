/**
 *
 *
 * @export
 * @interface ITestModel
 *
 */
export interface ITestModel {
    /**
     * Settings file to use when running tests
     *
     * @type {string}
     * @memberof ITestModel
     */
    settings?: string;
    /**
     * Lists discovered tests
     *
     * @type {boolean}
     * @memberof ITestModel
     */
    listTests?: boolean;
    /**
     * Run tests that match the given expression
     *
     * @type {string}
     * @memberof ITestModel
     */
    filter?: string;
    /**
     * Use custom adapters from the given path in the test run.
     *
     * @type {string}
     * @memberof ITestModel
     */
    testAdapterPath?: string;
    /**
     * Specify a logger for test results
     *
     * @type {string}
     * @memberof ITestModel
     */
    logger?: string;

    /**
     * Enable verbose logs for test platform. Logs are written to the provided file.

     *
     * @type {string}
     * @memberof ITestModel
     */
    diag?: string;
    /**
     * Skip building the project prior to running. By default, the project will be built.

     *
     * @type {boolean}
     * @memberof ITestModel
     */
    noBuild?: boolean;
    /**
     * Configuration to use for building the project. Default for most projects is  "Debug"

     *
     * @type {string}
     * @memberof ITestModel
     */
    configuration?: string;
    /**
     * Target framework to build for. The target framework has to be specified in the project file.

     *
     * @type {string}
     * @memberof ITestModel
     */
    framework?: string;
    /**
     * sets the console verbosity

     *
     * @type {string}
     * @memberof ITestModel
     */
    verbosity?: string;
    output?: string;
    /**
     * Any extra options that should be passed to the program being run

     *
     * @type {Array<string>}
     * @memberof ITestModel
     */
    additionalArgs?: string[];
    /**
     * Log the command to the console
     *
     * @type {boolean}
     * @memberof ITestModel
     */
    echo?: boolean;
}

/**
 *
 *
 * @export
 * @interface INugetPushModel
 */
export interface INugetPushModel {
    /**
     *
     *
     * @type {boolean}
     * @memberof INugetPushModel
     */
    forceEnglishOutput?: boolean;
    /**
     * Specifies the server URL
     *
     * @type {string}
     * @memberof INugetPushModel
     */
    source?: string;

    /**
     *
     * Specifies the symbol server URL. If not specified, nuget.smbsrc.net is used when pushing to nuget.org
     * @type {string}
     * @memberof INugetPushModel
     */
    symbolsource?: string;
    /**
     *
     * Specifies the timeout for pushing to a server in seconds. Defaults to 300 seconds (5 minutes)
     * @type {number}
     * @memberof INugetPushModel
     */
    timeout?: number;
    /**
     *
     * The API key for the server.
     * @type {string}
     * @memberof INugetPushModel
     */
    apiKey?: string;
    /**
     * The API key for the symbol server.
     *
     * @type {string}
     * @memberof INugetPushModel
     */
    symbolApiKey?: string;
    /**
     * Disable buffering when pushing to an HTTP(S) server to decrease memory usage.
     *
     * @type {boolean}
     * @memberof INugetPushModel
     */
    disableBuffering?: boolean;
    /**
     * If a symbols package exists, it will not be pushed to a symbols server.
     *
     * @type {boolean}
     * @memberof INugetPushModel
     */
    noSymbols?: boolean;
    /**
     * Logs the command we run to the console
     *
     * @type {boolean}
     * @memberof INugetPushModel
     */
    echo?: boolean;

}

import * as Joi from 'joi'
/* Represents a build model */
export default class NugetPushModel  implements Joi.SchemaMap  {
    [key: string]: string | number | boolean | object | Joi.SchemaMap | Joi.AnySchema | Joi.ArraySchema | Joi.AlternativesSchema | Joi.BinarySchema | Joi.BooleanSchema | Joi.DateSchema | Joi.FunctionSchema | Joi.NumberSchema | Joi.ObjectSchema | Joi.StringSchema | Joi.LazySchema | Joi.SchemaLike[] | null;
    echo: Joi.BooleanSchema;
    noSymbols: Joi.BooleanSchema;
    disableBuffering: Joi.BooleanSchema;
    symbolApiKey: Joi.StringSchema;
    apiKey: Joi.StringSchema;
    timeout: Joi.NumberSchema;
    symbolsource: Joi.StringSchema;
    source: Joi.StringSchema;
    forceEnglishOutput: Joi.BooleanSchema;
  /**
   * Create the validation model
   */
    constructor() {

        this.forceEnglishOutput = Joi.boolean().description(' Forces the application to run using an invariant, English-based culture.');
        this.source = Joi.string().description('Specifies the server URL');
        this.symbolsource = Joi.string().description('Specifies the symbol server URL. If not specified, nuget.smbsrc.net is used when pushing to nuget.org');
        this.timeout = Joi.number().integer().description('Specifies the timeout for pushing to a server in seconds. Defaults to 300 seconds (5 minutes)');
        this.apiKey = Joi.string().description('The API key for the server.');
        this.symbolApiKey = Joi.string().description('The API key for the symbol server.');
        this.disableBuffering = Joi.boolean().description('Disable buffering when pushing to an HTTP(S) server to decrease memory usage.');
        this.noSymbols = Joi.boolean().description('If a symbols package exists, it will not be pushed to a symbols server.');
        this.echo = Joi.boolean().default(false).description('Log the command to the console');
    }

}
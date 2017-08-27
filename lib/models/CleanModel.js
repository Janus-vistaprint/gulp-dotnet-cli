const Joi = require('joi');
/* Represents a clean model */
class CleanModel {
  /**
   * Create the validation model
   */
    constructor() {
        this.output = Joi.string().description('Directory in which the build outputs have been placed.');
        this.framework = Joi.string().description('Target framework to build for. The target framework has to be specified in the project file.');
        this.runtime = Joi.string().description('Target runtime to build for. The default is to build a portable application.');
        this.configuration = Joi.string().description('Configuration to use for building the project. Default for most projects is  "Debug"');
        this.verbosity = Joi.string().only('quiet', 'minimal', 'normal', 'detailed', 'diagnostic');
        this.echo = Joi.boolean().default(false).description('Log the command to the console');
    }

}

module.exports = CleanModel;
const Joi = require('joi');
const shelly = require('./shelly');
const argBuilder = require('./builders/runArgBuilder');
const runModel = require('./models/RunModel');
const validation = Joi.object().keys(new runModel());

module.exports = (options) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    //Run assumes the current directory without the project flag
    // assume usage of the flag so it has a gulp-y behavior 
    return shelly('dotnet', ['run', '--project'], calculatedArgs, value.echo, true);

};

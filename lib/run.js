const Joi = require('joi');
const shelly = require('./shelly');
const argBuilder = require('./builders/runArgBuilder');
const runModel = require('./models/runModel');
const validation = Joi.object().keys(new runModel());

module.exports = (options) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', ['run'], calculatedArgs, value.echo);

};
const Joi = require('joi');
const shelly = require('./shelly');
const argBuilder = require('./builders/cleanArgBuilder');
const CleanModel = require('./models/CleanModel');
const validation = Joi.object().keys(new CleanModel());

module.exports = (options) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'clean', calculatedArgs, value.echo);

};
import * as Joi from 'joi';
import shelly from './shelly';
const runModel = require('./models/RunModel');
const validation = Joi.object().keys(new runModel());
import argBuilder, { IRunModel } from './builders/runArgBuilder';
import * as stream from 'stream';

export default (options : IRunModel) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    //Run assumes the current directory without the project flag
    // assume usage of the flag so it has a gulp-y behavior 
    return shelly('dotnet', ['run', '--project'], calculatedArgs, value.echo, true);
    return shelly('dotnet', ['run', '--project'], calculatedArgs, value.echo) as stream.Transform;

};

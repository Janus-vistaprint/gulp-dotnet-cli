import * as Joi from 'joi'
import shelly from './shelly'
import argBuilder, { ICleanModel } from './builders/cleanArgBuilder'
import CleanModel from './models/CleanModel'
import * as stream from 'stream';
const validation = Joi.object().keys(new CleanModel());

export default (options: ICleanModel) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'clean', calculatedArgs, value.echo) as stream.Transform;

};
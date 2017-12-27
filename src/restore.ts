import * as Joi from 'joi';
import shelly from './shelly';
const RestoreModel = require('./models/RestoreModel');
const validation = Joi.object().keys(new RestoreModel());
import argBuilder, { IRestoreBuilder } from './builders/restoreArgBuilder';
import * as stream from 'stream';

export default (options : IRestoreBuilder) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'restore', calculatedArgs, value.echo) as stream.Transform;

};
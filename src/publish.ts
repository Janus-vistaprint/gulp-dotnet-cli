import * as Joi from 'joi'
import shelly from './shelly'
const PublishModel = require('./models/PublishModel');
const validation = Joi.object().keys(new PublishModel());
import argBuilder, { IPublishModel } from './builders/publishArgBuilder';
import * as stream from 'stream';

export default (options : IPublishModel) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'publish', calculatedArgs, value.echo) as stream.Transform;

};
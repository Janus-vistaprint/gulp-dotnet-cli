import { IPackModel } from './builders/packArgBuilder';
import PackModel from './models/PackModel';
import * as Joi from 'joi';
import shelly from './shelly';
import argBuilder from './builders/packArgBuilder';
import * as stream from 'stream';
const validation = Joi.object().keys(new PackModel());

export default (options: IPackModel) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'pack', calculatedArgs, value.echo) as stream.Transform;

};
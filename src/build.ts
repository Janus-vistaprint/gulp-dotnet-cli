import { IBuildModel } from './builders/buildArgBuilder';
import * as Joi from 'joi';
import shelly from './shelly'
import argBuilder from './builders/buildArgBuilder'
import BuildModel from './models/BuildModel'
import * as through2 from 'through2';
import * as stream from 'stream';
const validation = Joi.object().keys(new BuildModel());



export default (options : IBuildModel) => {
    let {error, value} = Joi.validate<IBuildModel>(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'build', calculatedArgs, value.echo) as stream.Transform;

};
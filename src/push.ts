import * as Joi from 'joi';
import shelly from './shelly';
import NugetPushModel from './models/NugetPushModel'
const validation = Joi.object().keys(new NugetPushModel());
import argBuilder, { INugetPushModel } from './builders/nugetPushArgBuilder';
import * as stream from 'stream';

export default (options : INugetPushModel) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', ['nuget', 'push'], calculatedArgs, value.echo) as stream.Transform;

};
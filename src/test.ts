import * as Joi from 'joi';
import shelly from './shelly';
import TestModel from './models/TestModel'
const validation = Joi.object().keys(new TestModel());
import argBuilder, { ITestModel } from './builders/testArgBuilder';
import * as stream from 'stream';

export default (options : ITestModel) => {
    let {error, value} = Joi.validate(options || {}, validation);
    if(error){
        throw error;
    }
    let calculatedArgs = argBuilder(value);
    
    return shelly('dotnet', 'test', calculatedArgs, value.echo) as stream.Transform;

};
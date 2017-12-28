import { IBuildModel } from './schema/interfaces/IBuildModel';
import shelly from './shelly'
import argBuilder from './builders/buildArgBuilder'
import * as through2 from 'through2';
import * as stream from 'stream';
import buildArgBuilder from './builders/buildArgBuilder';

export default (options : IBuildModel) => {
    let calculatedArgs = buildArgBuilder(options);
    return shelly('dotnet', 'build', calculatedArgs, options.echo) as stream.Transform;

};
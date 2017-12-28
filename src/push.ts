import { INugetPushModel } from './schema/interfaces/INugetPushModel';
import shelly from './shelly';
import * as stream from 'stream';
import nugetPushArgBuilder from './builders/nugetPushArgBuilder';

export default (options : INugetPushModel) => {
    let calculatedArgs = nugetPushArgBuilder(options);
    return shelly('dotnet', ['nuget', 'push'], calculatedArgs, options.echo) as stream.Transform;

};
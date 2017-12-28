import { ICleanModel } from './schema/interfaces/ICleanModel';
import shelly from './shelly'
import * as stream from 'stream';
import cleanArgBuilder from './builders/cleanArgBuilder';

export default (options: ICleanModel) => {
    let calculatedArgs = cleanArgBuilder(options);
    return shelly('dotnet', 'clean', calculatedArgs, options.echo) as stream.Transform;

};
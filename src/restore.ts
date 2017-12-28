import shelly from './shelly';
import * as stream from 'stream';
import { IRestoreModel } from './schema/interfaces/IRestoreModel';
import restoreArgBuilder from './builders/restoreArgBuilder';

export default (options : IRestoreModel) => {
    let calculatedArgs = restoreArgBuilder(options);
    return shelly('dotnet', 'restore', calculatedArgs, options.echo) as stream.Transform;

};
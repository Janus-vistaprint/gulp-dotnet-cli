import { IPublishModel } from './schema/interfaces/IPublishModel';
import publishArgBuilder from './builders/publishArgBuilder';
import shelly from './shelly'
import * as stream from 'stream';

export default (options : IPublishModel) => {
    let calculatedArgs = publishArgBuilder(options);
    return shelly('dotnet', 'publish', calculatedArgs, options.echo) as stream.Transform;

};
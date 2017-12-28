import { IPackModel } from './schema/interfaces/IPackModel';
import shelly from './shelly';
import argBuilder from './builders/packArgBuilder';
import * as stream from 'stream';
import packArgBuilder from './builders/packArgBuilder';

export default (options: IPackModel) => {
    let calculatedArgs = packArgBuilder(options);
    
    return shelly('dotnet', 'pack', calculatedArgs, options.echo) as stream.Transform;

};
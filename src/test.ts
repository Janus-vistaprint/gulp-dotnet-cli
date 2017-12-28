import { ITestModel } from './schema/interfaces/ITestModel';
import shelly from './shelly';
import * as stream from 'stream';
import testArgBuilder from './builders/testArgBuilder';

export default (options : ITestModel) => {
    let calculatedArgs = testArgBuilder(options);
    
    return shelly('dotnet', 'test', calculatedArgs, options.echo) as stream.Transform;

};
import build from './build';
import restore from './restore';
import test from './test';
import pack from './pack';
import publish from './publish';
import push from './push';
import clean from './clean';
import run from './run';
import { Transform } from 'stream';
import { IBuildModel } from './schema/interfaces/IBuildModel';
import { ICleanModel } from './schema/interfaces/ICleanModel';
import { INugetPushModel } from './schema/interfaces/INugetPushModel';
import { IPackModel } from './schema/interfaces/IPackModel';
import { IRestoreModel } from './schema/interfaces/IRestoreModel'
import { IRunModel } from './schema/interfaces/IRunModel'
import { ITestModel } from './schema/interfaces/ITestModel'
import { IPublishModel } from './schema/interfaces/IPublishModel'

export {
    build,
    restore,
    test,
    pack,
    publish,
    push,
    clean,
    run
};

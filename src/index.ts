import build from './build';
import restore from './restore';
import test from './test';
import pack from './pack';
import publish from './publish';
import push from './push';
import clean from './clean';
import run from './run';
import { Transform } from 'stream';
import { IBuildModel } from './builders/buildArgBuilder';
import { ICleanModel } from './builders/cleanArgBuilder';
import { INugetPushModel } from './builders/nugetPushArgBuilder';
import { IPackModel } from './builders/packArgBuilder';
import { IRestoreBuilder } from './builders/restoreArgBuilder'
import { IRunModel } from './builders/runArgBuilder'
import { ITestModel } from './builders/testArgBuilder'
import { IPublishModel } from './builders/publishArgBuilder'

export default {
    build,
    restore, 
    test, 
    pack, 
    publish,
    push,
    clean,
    run
};

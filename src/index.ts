import { Transform } from "stream";
import build from "./build";
import clean from "./clean";
import pack from "./pack";
import publish from "./publish";
import push from "./push";
import restore from "./restore";
import run from "./run";
import { IBuildModel } from "./schema/interfaces/IBuildModel";
import { ICleanModel } from "./schema/interfaces/ICleanModel";
import { INugetPushModel } from "./schema/interfaces/INugetPushModel";
import { IPackModel } from "./schema/interfaces/IPackModel";
import { IPublishModel } from "./schema/interfaces/IPublishModel";
import { IRestoreModel } from "./schema/interfaces/IRestoreModel";
import { IRunModel } from "./schema/interfaces/IRunModel";
import { ITestModel } from "./schema/interfaces/ITestModel";
import test from "./test";

export {
    build,
    restore,
    test,
    pack,
    publish,
    push,
    clean,
    run,
};

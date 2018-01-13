import * as assert from "assert";
import * as sinon from "sinon";
import { SinonMock, SinonStatic } from "sinon";
import build from "../../src/build";
import clean from "../../src/clean";
import pack from "../../src/pack";
import publish from "../../src/publish";
import push from "../../src/push";
import restore from "../../src/restore";
import run from "../../src/run";
import * as shelly from "../../src/shelly";
import test from "../../src/test";

let mock: SinonMock;

beforeEach(() => {
    mock = sinon.mock(shelly);
});
afterEach(() => {
    mock.restore();
});
describe("when invoking build", () => {
    it("should default echo to false", () => {
        mock.expects("default").withArgs("dotnet", "build", [],  false);
        build();
        mock.verify();
    });

    it("should override with the echo set", () => {
        mock.expects("default").withArgs("dotnet", "build", [],  true);
        build({echo: true});
        mock.verify();
    });
});

describe("when invoking clean", () => {
    it("should default echo to false", () => {
        mock.expects("default").withArgs("dotnet", "clean", [],  false);
        clean();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", "clean", [],  true);
        clean({echo: true});
        mock.verify();
    });
});

describe("when invoking pack", () => {
    it("should default echo to false", () => {

        mock.expects("default").withArgs("dotnet", "pack", [],  false);
        pack();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", "pack", [],  true);
        pack({echo: true});
        mock.verify();
    });
});

describe("when invoking publish", () => {
    it("should default echo to false", () => {

        mock.expects("default").withArgs("dotnet", "publish", [],  false);
        publish();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", "publish", [],  true);
        publish({echo: true});
        mock.verify();
    });
});

describe("when invoking push", () => {
    it("should default echo to false", () => {

        mock.expects("default").withArgs("dotnet", ["nuget", "push"], [],  false);
        push();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", ["nuget", "push"], [],  true);
        push({echo: true});
        mock.verify();
    });
});

describe("when invoking restore", () => {
    it("should default echo to false", () => {

        mock.expects("default").withArgs("dotnet", "restore", [],  false);
        restore();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", "restore", [],  true);
        restore({echo: true});
        mock.verify();
    });
});

describe("when invoking run", () => {
    it("should default echo to false", () => {

        mock.expects("default").withArgs("dotnet", ["run", "--project"], [],  false, true);
        run();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", ["run", "--project"], [],  true, true);
        run({echo: true});
        mock.verify();
    });
});

describe("when invoking test", () => {
    it("should default echo to false", () => {

        mock.expects("default").withArgs("dotnet", "test", [],  false);
        test();
        mock.verify();
    });

    it("should override with the echo set", () => {

        mock.expects("default").withArgs("dotnet", "test", [],  true);
        test({echo: true});
        mock.verify();
    });
});

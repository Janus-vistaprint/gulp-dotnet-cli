import * as assert from "assert";
import * as builder from "../../src/builders/packArgBuilder";
describe("pack Argument Builder", () => {
    it("should return an empty array if nothing is passed in", () => {
      assert.deepEqual(builder.default(null as any), []);
    });
    it("should return an empty array if an empty object is passed in", () => {
      assert.deepEqual(builder.default({}), []);
    });
    it("should return an empty array if an array is passed in", () => {
      assert.deepEqual(builder.default([] as any), []);
    });
    it("should have output if output is passed", () => {
      assert.deepEqual(builder.default({output: "yo"}), ["--output", "yo"]);
    });
    it("should have noBuild if noBuild is passed", () => {
      assert.deepEqual(builder.default({noBuild: true}), ["--no-build"]);
    });
    it("should have noRestore if noRestore is passed", () => {
      assert.deepEqual(builder.default({noRestore: true}), ["--no-restore"]);
    });
    it("should have noDependencies if noDependencies is passed", () => {
      assert.deepEqual(builder.default({noDependencies: true}), ["--no-dependencies"]);
    });
    it("should have includeSymbols if includeSymbols is passed", () => {
      assert.deepEqual(builder.default({includeSymbols: true}), ["--include-symbols"]);
    });
    it("should have includeSource if includeSource is passed", () => {
      assert.deepEqual(builder.default({includeSource: true}), ["--include-source"]);
    });
    it("should have serviceable if serviceable is passed", () => {
      assert.deepEqual(builder.default({serviceable: true}), ["--serviceable"]);
    });

    it("should have configuration if configuration is passed", () => {
      assert.deepEqual(builder.default({configuration: "yo"}), ["--configuration", "yo"]);
    });
    it("should have versionSuffix if versionSuffix is passed", () => {
      assert.deepEqual(builder.default({versionSuffix: "0"}), ["--version-suffix", "0"]);
    });

    it("should have verbosity if verbosity is passed", () => {
      assert.deepEqual(builder.default({verbosity: "yo"}), ["--verbosity", "yo"]);
    });
    it("should have msbuild args if msbuildargs are passed and are always last", () => {
      assert.deepEqual(builder.default({msbuildArgs: ["/p:awesome=1.0.0", "/t:Build"], configuration: "Release"}), ["--configuration", "Release", "/p:awesome=1.0.0", "/t:Build"]);
    });
    it("should have msbuild args if msbuildargs are passed and are always last, version even...laster", () => {
      assert.deepEqual(builder.default({msbuildArgs: ["/p:awesome=1.0.0", "/t:Build"], configuration: "Release", version: "1.2.0"}), ["--configuration", "Release", "/p:awesome=1.0.0", "/t:Build", "/p:Version=1.2.0"]);
    });

});

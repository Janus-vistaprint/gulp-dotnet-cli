import * as assert from "assert";
import * as builder from "../../src/builders/nugetPushArgBuilder";
describe("push Argument Builder", () => {
    it("should return an empty array if nothing is passed in", () => {
      assert.deepEqual(builder.default(null as any), []);
    });
    it("should return an empty array if an empty object is passed in", () => {
      assert.deepEqual(builder.default({}), []);
    });
    it("should return an empty array if an array is passed in", () => {
      assert.deepEqual(builder.default([] as any), []);
    });
    it("should have source if source is passed", () => {
      assert.deepEqual(builder.default({source: "yo"}), ["--source", "yo"]);
    });
    it("should have symbolsource if symbolsource is passed", () => {
      assert.deepEqual(builder.default({symbolsource: "yo"}), ["--symbol-source", "yo"]);
    });
    it("should have symbolsource if symbolsource is passed", () => {
      assert.deepEqual(builder.default({symbolApiKey: "yo"}), ["--symbol-api-key", "yo"]);
    });
    it("should have timeout if timeout is passed", () => {
      assert.deepEqual(builder.default({timeout: "yo" as any}), ["--timeout", "yo"]);
    });
    it("should have apiKey if apiKey is passed", () => {
      assert.deepEqual(builder.default({apiKey: "yo"}), ["--api-key", "yo"]);
    });
    it("should have disableBuffering if disableBuffering is passed", () => {
      assert.deepEqual(builder.default({disableBuffering: true}), ["--disable-buffering"]);
    });
    it("should have noSymbols if noSymbols is passed", () => {
      assert.deepEqual(builder.default({noSymbols: true}), ["--no-symbols"]);
    });
    it("should have forceEnglishOutput if forceEnglishOutput is passed", () => {
      assert.deepEqual(builder.default({forceEnglishOutput: true}), ["--force-english-output"]);
    });

});

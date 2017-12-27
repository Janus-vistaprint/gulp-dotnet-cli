let assert = require('assert');
let builder = require('../../dist/builders/restoreArgBuilder');
describe('Restore Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder.default(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder.default({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder.default([]), []);
    });
    it('should have source if source is passed', () => {
      assert.deepEqual(builder.default({source: 'yo'}), ['--source', 'yo']);
    });
    it('should have multiple sources if source array is passed', () => {
      assert.deepEqual(builder.default({source: ['yo1', 'yo2']}), ['--source', 'yo1', '--source', 'yo2']);
    });
    it('should have runtime if runtime is passed', () => {
      assert.deepEqual(builder.default({runtime: 'yo'}), ['--runtime', 'yo']);
    });
    it('should have packages if packages is passed', () => {
      assert.deepEqual(builder.default({packages: 'yo'}), ['--packages', 'yo']);
    });
    it('should have configfile if configfile is passed', () => {
      assert.deepEqual(builder.default({configfile: 'yo'}), ['--configfile', 'yo']);
    });
    it('should have disableParallel if disableParallel is passed', () => {
      assert.deepEqual(builder.default({disableParallel: true}), ['--disable-parallel']);
    });
    it('should have noIncremental if noIncremental is passed', () => {
      assert.deepEqual(builder.default({noIncremental: true}), ['--no-incremental']);
    });
    it('should have noDependencies if noDependencies is passed', () => {
      assert.deepEqual(builder.default({noDependencies: true}), ['--no-dependencies']);
    });
    it('should have msbuild args if msbuildargs are passed and are always last', () => {
      assert.deepEqual(builder.default({msbuildArgs: ['/p:awesome=1.0.0', '/t:Build']}), ['/p:awesome=1.0.0', '/t:Build']);
    });
    it('should version arguments', () => {
      assert.deepEqual(builder.default({version: '1.0.1'}), ['/p:Version=1.0.1']);
    });
});
let assert = require('assert');
let builder = require('../../dist/builders/cleanArgBuilder');
describe('Clean Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder.default(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder.default({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder.default([]), []);
    });
    it('should have output if output is passed', () => {
      assert.deepEqual(builder.default({output: 'yo'}), ['--output', 'yo']);
    });
    it('should have framework if framework is passed', () => {
      assert.deepEqual(builder.default({framework: 'yo'}), ['--framework', 'yo']);
    });
    it('should have runtime if runtime is passed', () => {
      assert.deepEqual(builder.default({runtime: 'yo'}), ['--runtime', 'yo']);
    });   
    it('should have configuration if configuration is passed', () => {
      assert.deepEqual(builder.default({configuration: 'yo'}), ['--configuration', 'yo']);
    });
    it('should have verbosity if verbosity is passed', () => {
      assert.deepEqual(builder.default({verbosity: 'yo'}), ['--verbosity', 'yo']);
    });
    it('should have msbuild args if msbuildargs are passed and are always last', () => {
      assert.deepEqual(builder.default({msbuildArgs: ['/p:awesome=1.0.0', '/t:Build'], configuration: 'Release'}), ['--configuration','Release','/p:awesome=1.0.0', '/t:Build']);
    });
    it('should have msbuild args if msbuildargs are passed and are always last, version even...laster', () => {
      assert.deepEqual(builder.default({msbuildArgs: ['/p:awesome=1.0.0', '/t:Build'], configuration: 'Release', version: '1.2.0'}), ['--configuration','Release','/p:awesome=1.0.0', '/t:Build', '/p:Version=1.2.0']);
    });
});
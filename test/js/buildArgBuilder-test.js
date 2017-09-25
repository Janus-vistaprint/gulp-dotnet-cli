let assert = require('assert');
let builder = require('../../lib/builders/buildArgBuilder');
describe('Build Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder([]), []);
    });
    it('should have output if output is passed', () => {
      assert.deepEqual(builder({output: 'yo'}), ['--output', 'yo']);
    });
    it('should have framework if framework is passed', () => {
      assert.deepEqual(builder({framework: 'yo'}), ['--framework', 'yo']);
    });
    it('should have runtime if runtime is passed', () => {
      assert.deepEqual(builder({runtime: 'yo'}), ['--runtime', 'yo']);
    });
    it('should have versionSuffix if versionSuffix is passed', () => {
      assert.deepEqual(builder({versionSuffix: 'yo'}), ['--version-suffix', 'yo']);
    });
    it('should have configuration if configuration is passed', () => {
      assert.deepEqual(builder({configuration: 'yo'}), ['--configuration', 'yo']);
    });
    it('should have noIncremental if noIncremental is passed', () => {
      assert.deepEqual(builder({noIncremental: true}), ['--no-incremental']);
    });
    it('should have noDependencies if noDependencies is passed', () => {
      assert.deepEqual(builder({noDependencies: true}), ['--no-dependencies']);
    });
    it('should have verbosity if verbosity is passed', () => {
      assert.deepEqual(builder({verbosity: 'yo'}), ['--verbosity', 'yo']);
    });
    it('should have msbuild args if msbuildargs are passed and are always last', () => {
      assert.deepEqual(builder({msbuildArgs: ['/p:awesome=1.0.0', '/t:Build'], configuration: 'Release'}), ['--configuration','Release','/p:awesome=1.0.0', '/t:Build']);
    });
    it('should have msbuild args if msbuildargs are passed and are always last, version even...laster', () => {
      assert.deepEqual(builder({msbuildArgs: ['/p:awesome=1.0.0', '/t:Build'], configuration: 'Release', version: '1.2.0'}), ['--configuration','Release','/p:awesome=1.0.0', '/t:Build', '/p:Version=1.2.0']);
    });
});
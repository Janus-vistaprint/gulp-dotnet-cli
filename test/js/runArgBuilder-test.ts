import * as assert from 'assert';
let builder = require('../../dist/builders/runArgBuilder');
describe('Run Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder.default(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder.default({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder.default([]), []);
    });
    it('should have configuration if configuration is passed', () => {
      assert.deepEqual(builder.default({configuration: 'yo'}), ['--configuration', 'yo']);
    });    
    it('should have framework if framework is passed', () => {
      assert.deepEqual(builder.default({framework: 'yo'}), ['--framework', 'yo']);
    });
    it('should have runtime if runtime is passed', () => {
      assert.deepEqual(builder.default({runtime: 'yo'}), ['--runtime', 'yo']);
    });
    it('should have launchProfile if launchProfile is passed', () => {
      assert.deepEqual(builder.default({launchProfile: 'yo'}), ['--launch-profile', 'yo']);
    });    
    it('should have noLaunchProfile if noLaunchProfile is passed', () => {
      assert.deepEqual(builder.default({noLaunchProfile: true}), ['--no-launch-profile']);
    });    
    it('should have noBuild if noBuild is passed', () => {
      assert.deepEqual(builder.default({noBuild: 'yo'}), ['--no-build', 'yo']);
    });    
    it('should have noRestore if noRestore is passed', () => {
      assert.deepEqual(builder.default({noRestore: 'yo'}), ['--no-restore', 'yo']);
    });    
    it('should have noDependencies if noDependencies is passed', () => {
      assert.deepEqual(builder.default({noDependencies: 'yo'}), ['--no-dependencies', 'yo']);
    });    
    it('should have force if force is passed', () => {
      assert.deepEqual(builder.default({force: 'yo'}), ['--force', 'yo']);
    });    
    it('should have verbosity if verbosity is passed', () => {
      assert.deepEqual(builder.default({verbosity: 'yo'}), ['--verbosity', 'yo']);
    });
    it('should have additionalArgs if additionalArgs are passed and are always last', () => {
      assert.deepEqual(builder.default({additionalArgs: ['/p:awesome=1.0.0', '/t:Build'], configuration: 'Release'}), ['--configuration','Release','/p:awesome=1.0.0', '/t:Build']);
    });
});

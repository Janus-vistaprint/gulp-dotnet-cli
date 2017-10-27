let assert = require('assert');
let builder = require('../../lib/builders/runArgBuilder');
describe('Run Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder([]), []);
    });
    it('should have configuration if configuration is passed', () => {
      assert.deepEqual(builder({configuration: 'yo'}), ['--configuration', 'yo']);
    });    
    it('should have framework if framework is passed', () => {
      assert.deepEqual(builder({framework: 'yo'}), ['--framework', 'yo']);
    });
    it('should have runtime if runtime is passed', () => {
      assert.deepEqual(builder({runtime: 'yo'}), ['--runtime', 'yo']);
    });
    it('should have launchProfile if launchProfile is passed', () => {
      assert.deepEqual(builder({launchProfile: 'yo'}), ['--launch-profile', 'yo']);
    });    
    it('should have noLaunchProfile if noLaunchProfile is passed', () => {
      assert.deepEqual(builder({noLaunchProfile: 'yo'}), ['--no-launch-profile', 'yo']);
    });    
    it('should have noBuild if noBuild is passed', () => {
      assert.deepEqual(builder({noBuild: 'yo'}), ['--no-build', 'yo']);
    });    
    it('should have noRestore if noRestore is passed', () => {
      assert.deepEqual(builder({noRestore: 'yo'}), ['--no-restore', 'yo']);
    });    
    it('should have noDependencies if noDependencies is passed', () => {
      assert.deepEqual(builder({noDependencies: 'yo'}), ['--no-dependencies', 'yo']);
    });    
    it('should have force if force is passed', () => {
      assert.deepEqual(builder({force: 'yo'}), ['--force', 'yo']);
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

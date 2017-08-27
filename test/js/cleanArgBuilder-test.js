let assert = require('assert');
let builder = require('../../lib/builders/cleanArgBuilder');
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
    it('should have configuration if configuration is passed', () => {
      assert.deepEqual(builder({configuration: 'yo'}), ['--configuration', 'yo']);
    });
    it('should have verbosity if verbosity is passed', () => {
      assert.deepEqual(builder({verbosity: 'yo'}), ['--verbosity', 'yo']);
    });
});
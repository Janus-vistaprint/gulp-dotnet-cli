let assert = require('assert');
let builder = require('../../dist/builders/testArgBuilder');
describe('Test Argument Builder', () => {
  it('should handle null', () => {
    assert.deepEqual(builder.default(null), []);
  });
    it('should have settings if settings is passed', () => {
      assert.deepEqual(builder.default({settings: 'yo'}), ['--settings', 'yo']);
    });
    it('should have listTests if listTests is passed', () => {
      assert.deepEqual(builder.default({listTests: true}), ['--list-tests']);
    });
    it('should have filter if filter is passed', () => {
      assert.deepEqual(builder.default({filter: 'TestCategory!=yo'}), ['--filter', 'TestCategory!=yo']);
    });
    it('should have settings if settings is passed', () => {
      assert.deepEqual(builder.default({settings: 'yo'}), ['--settings', 'yo']);
    });
    it('should have testAdapterPath args if testAdapterPath are passed', () => {
      assert.deepEqual(builder.default({testAdapterPath: "yo"}), ['--test-adapter-path', 'yo']);
    });
    it('should have logger args if logger are passed', () => {
      assert.deepEqual(builder.default({logger: "yo"}), ['--logger', 'yo']);
    });
    it('should have configuration args if configuration are passed ', () => {
      assert.deepEqual(builder.default({configuration: "yo"}), ['--configuration', 'yo']);
    });
    it('should have framework args if framework are passed', () => {
      assert.deepEqual(builder.default({framework: "yo"}), ['--framework', 'yo']);
    });
    it('should have output args if output are passed', () => {
      assert.deepEqual(builder.default({output: "yo"}), ['--output', 'yo']);
    });
    it('should have diag args if diag are passed', () => {
      assert.deepEqual(builder.default({diag: "yo"}), ['--diag', 'yo']);
    });
    it('should have noBuild if noBuild is passed', () => {
      assert.deepEqual(builder.default({noBuild: true}), ['--no-build']);
    });
    it('should have verbosity args if verbosity are passed', () => {
      assert.deepEqual(builder.default({verbosity: "yo"}), ['--verbosity', 'yo']);
    });
    it('should have additional args if additionalArgs are passed and are always last', () => {
      assert.deepEqual(builder.default({additionalArgs: ['/p:awesome=1.0.0', '/t:Build']}), ['/p:awesome=1.0.0', '/t:Build']);
    });
});
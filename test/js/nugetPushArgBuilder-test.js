let assert = require('assert');
let builder = require('../../lib/builders/nugetPushArgBuilder');
describe('push Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder([]), []);
    });
    it('should have source if source is passed', () => {
      assert.deepEqual(builder({source: 'yo'}), ['--source', 'yo']);
    });
    it('should have symbolsource if symbolsource is passed', () => {
      assert.deepEqual(builder({symbolsource: 'yo'}), ['--symbol-source', 'yo']);
    });
    it('should have timeout if timeout is passed', () => {
      assert.deepEqual(builder({timeout: 'yo'}), ['--timeout', 'yo']);
    });
    it('should have apiKey if apiKey is passed', () => {
      assert.deepEqual(builder({apiKey: 'yo'}), ['--api-key', 'yo']);
    });
    it('should have disableBuffering if disableBuffering is passed', () => {
      assert.deepEqual(builder({disableBuffering: true}), ['--disable-buffering']);
    });
    it('should have noSymbols if noSymbols is passed', () => {
      assert.deepEqual(builder({noSymbols: true}), ['--no-symbols']);
    });
    it('should have forceEnglishOutput if forceEnglishOutput is passed', () => {
      assert.deepEqual(builder({forceEnglishOutput: true}), ['--force-english-output']);
    });

});
let shelly = require('../../dist/shelly');
import * as assert from 'assert';
describe("shelly", () => {

    it('should throw an error with no command array', () => {
        assert.throws(() => shelly.default(), (error : any)=>(error.message as string).includes("command not passed"));
    });
    it('should throw with no noun', ()=>{
        assert.throws(()=>shelly.default('dotnet', null), (error : any)=>(error.message as string).includes("noun not passed"));
    })
    it('args has to be an array', ()=>{
        assert.throws(()=>shelly.default('dotnet', "run", true), (error : any)=>(error.message as string).includes("Arguments has to be an array"));
    })
});

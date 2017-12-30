import * as assert from 'assert';
import * as cp from 'child-process-promise';
import * as sinon from 'sinon';
import { SinonMock } from 'sinon';
import * as through2 from 'through2';
let shelly = require('../../dist/shelly').default;
describe("shelly", () => {
    let cpMock: SinonMock;
    let mockThrough: SinonMock;

    beforeEach(()=>{
        cpMock = sinon.mock(cp);
        mockThrough = sinon.mock(through2);
    });

    afterEach(()=>{
        cpMock.restore();
        mockThrough.restore();
    });
    it('should throw an error with no command array', () => {
        // tslint:disable-next-line:max-line-length
        assert.throws(() => shelly(null, null, null), (error: any)=>(error.message as string).includes("command not passed"));
    });
    it('should throw with no noun', ()=>{
        // tslint:disable-next-line:max-line-length
        assert.throws(()=>shelly('dotnet', null, null), (error: any)=>(error.message as string).includes("noun not passed"));
    });
    it('args has to be an array', ()=>{
        const shelly2 = require('../../dist/shelly');
        // tslint:disable-next-line:max-line-length
        assert.throws(()=>shelly2.default('dotnet', "run", true), (error: any)=>(error.message as string).includes("Arguments has to be an array"));
    });
    it('it callsback early if nothing is passed', ()=>{
        const spiedFunc = sinon.spy();
        cpMock.expects("spawn");
        const expect = mockThrough.expects("obj");
        shelly("dotnet", "restore", []);
        expect.yield(null, null, spiedFunc);
        assert(spiedFunc.called);
        
    });
    it('it calls cp with the correct info', ()=>{
        const expect = mockThrough.expects("obj");
        // tslint:disable-next-line:max-line-length
        cpMock.expects("spawn")
            .withArgs("dotnet", ["restore", "awesome.csproj", "--yodawg", "true"], {stdio: "inherit"} )
            .returns(new Promise(()=>{}));
        shelly("dotnet", "restore", ["--yodawg", "true"]);
        expect.yield({path: "awesome.csproj"}, null, ()=>{});

        cpMock.verify();
        
    });
    it('it calls cp with cwd when set', ()=>{
        const expect = mockThrough.expects("obj");
        // tslint:disable-next-line:max-line-length
        cpMock.expects("spawn")
            .withArgs("dotnet", 
            ["restore", "./yodawg/awesome.csproj", "--yodawg", "true"], 
            {stdio: "inherit", cwd: "./yodawg"})

            .returns(new Promise(()=>{}));
        shelly("dotnet", "restore", ["--yodawg", "true"], true, true);
        expect.yield({path: "./yodawg/awesome.csproj"}, null, ()=>{});
        cpMock.verify();
        
    });
});

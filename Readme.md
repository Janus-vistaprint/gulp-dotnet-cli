## gulp-dotnet-cli

[gulp](https://github.com/gulpjs/gulp) plugin for the dotnet cli. You can run `dotnet action --help` to get help on a specific action ex. `dotnet build --help` 

## Usage

You must have the [dotnet cli](http://dot.net) installed and on your path.

First, install gulp-dotnet-cli 

`npm install --save-dev gulp-dotnet-cli`

Then add it to your gulpfile.js

```javascript

let {restore, build, test, pack, publish} = require('gulp-dotnet-cli');
let version = `1.3.` + Process.env.BUILD_NUMBER || '0';
//restore nuget packages
gulp.task('restore', ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(restore());
})
//compile
gulp.task('build', ['restore'], ()=>{
                    //this could be **/*.sln if you wanted to build solutions
    return gulp.src('**/*.csproj', {read: false})
        .pipe(build({configuration: 'Release', version: version}));
});
//run unit tests
gulp.task('test', ['build'], ()=>{
    return gulp.src('**/*test*.csproj', {read: false})
        .pipe(test())
});
//compile and publish an application to the local filesystem
gulp.task('publish', ['test'], ()=>{
    return gulp.src('src/TestWebProject.csproj', {read: false})
                .pipe(publish({configuration: 'Release', version: version}));
})
//convert a project to a nuget package
gulp.task('pack', ['build'], ()=>{
    return gulp.src('**/TestLibrary.csproj', {read: false})
                .pipe(pack({
                            output: path.join(process.cwd(), 'nupkgs') , 
                            version: version
                            }));
});
//push nuget packages to a server
gulp.task('push', ['pack'], ()=>{
    return gulp.src('nupkgs/*.nupkg', {read: false})
                .pipe(push({
                    apiKey: Process.env.NUGET_API_KEY, 
                    source: 'https://myget.org/f/myfeedurl'}));
});

```
You can find a working example in our [test](test/gulpfile.js) directory

## Options

Each plugin has 1 argument that is an object. Each object has key/value settings, and each setting is optional, but will change the default behaviors. All of the options are documented in the [Api docs](docs/index.md). 


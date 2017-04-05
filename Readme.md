## gulp-dotnet-cli

dotnet cli for [gulp](https://github.com/gulpjs/gulp) 

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
                .pipe(pack({output: path.join(process.cwd(), 'nupkgs'), version: version}));
});
//push nuget packages to a server
gulp.task('push', ['pack'], ()=>{
    return gulp.src('nupkgs/*.nupkg', {read: false})
                .pipe(push({apiKey: Process.env.NUGET_API_KEY, source: 'https://myget.org/f/myfeedurl'}));
});

```

## Options

All of the options are documented in the [Api docs](docs/index.md). **All options, are optional**
[![Coverage Status](https://coveralls.io/repos/github/Janus-vistaprint/gulp-dotnet-cli/badge.svg?branch=master)](https://coveralls.io/github/Janus-vistaprint/gulp-dotnet-cli?branch=master) [![Build Status](https://travis-ci.org/Janus-vistaprint/gulp-dotnet-cli.svg?branch=master)](https://travis-ci.org/Janus-vistaprint/gulp-dotnet-cli) [![Maintainability](https://api.codeclimate.com/v1/badges/71c799200151715e1c08/maintainability)](https://codeclimate.com/github/Janus-vistaprint/gulp-dotnet-cli/maintainability) [![npm](https://img.shields.io/npm/dm/gulp-dotnet-cli.svg)](https://www.npmjs.com/package/gulp-dotnet-cli)

## gulp-dotnet-cli

[gulp](https://github.com/gulpjs/gulp) plugin for the dotnet cli. 

You can view our [Api docs](https://janus-vistaprint.github.io/gulp-dotnet-cli/), or read [this blog post](https://blog.terribledev.io/Building-dotnet-core-apps-and-packages-with-gulp/)

Each interface in the docs should describe the objects you must pass in. For example [IBuildModel](https://janus-vistaprint.github.io/gulp-dotnet-cli/interfaces/ibuildmodel.html) is the interface containing the declaration of options for the `build` action.

## Usage

You must have the [dotnet cli](http://dot.net) installed and on your path.

First, install gulp-dotnet-cli 

`npm install --save-dev gulp-dotnet-cli`

Then add it to your gulpfile.js

Simple Example:

```javascript

let {clean, restore, build, test, pack, publish, run} = require('gulp-dotnet-cli');
let gulp = require('gulp');
//clean
gulp.task('clean', ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(clean());
});
//restore nuget packages
gulp.task('restore', ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(restore());
});
//compile
gulp.task('build', ['restore'], ()=>{
                    //this could be **/*.sln if you wanted to build solutions
    return gulp.src('**/*.csproj', {read: false})
        .pipe(build());
});
//run unit tests
gulp.task('test', ['build'], ()=>{
    return gulp.src('**/*test*.csproj', {read: false})
        .pipe(test())
});
//compile and publish an application to the local filesystem
gulp.task('publish', ['test'], ()=>{
    return gulp.src('src/TestWebProject.csproj', {read: false})
                .pipe(publish({configuration: 'Release'}));
});
//run
gulp.task('run', ()=>{
    return gulp.src('src/TestWebProject.csproj', {read: false})
            .pipe(run());
});

```


More Complicated example:

```javascript

let {clean, restore, build, test, pack, publish, run} = require('gulp-dotnet-cli');
let version = `1.3.` + (process.env.BUILD_NUMBER || '0');
let configuration = process.env.BUILD_CONFIGURATION || 'Release';
let gulp = require('gulp');
//clean
gulp.task('clean', ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(clean());
});
//restore nuget packages
gulp.task('restore', ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(restore());
});
//compile
gulp.task('build', ['restore'], ()=>{
                    //this could be **/*.sln if you wanted to build solutions
    return gulp.src('**/*.csproj', {read: false})
        .pipe(build({configuration: configuration, version: version}));
});
//run unit tests
gulp.task('test', ['build'], ()=>{
    return gulp.src('**/*test*.csproj', {read: false})
        .pipe(test())
});
//compile and publish an application to the local filesystem
gulp.task('publish', ['test'], ()=>{
    return gulp.src('src/TestWebProject.csproj', {read: false})
                .pipe(publish({configuration: configuration, version: version}));
});
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
                    apiKey: process.env.NUGET_API_KEY, 
                    source: 'https://myget.org/f/myfeedurl'}));
});
//run
gulp.task('run', ()=>{
    return gulp.src('src/TestWebProject.csproj', {read: false})
                .pipe(run());
});

```
You can find a working example in our [test](test/gulpfile.js) directory

## Generating docs

You can generate new docs to host by running `yarn run docs` or `npm run docs`. The docs folder is tracked with git lfs, you must have it installed if you wish to update the docs folder.
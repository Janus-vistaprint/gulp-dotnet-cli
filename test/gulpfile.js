let gulp = require('gulp');
let {restore, build, test, pack, publish} = require('gulp-dotnet-cli');
let path = require('path');
let process = require('process');
let del = require('del');

gulp.task('clean', ()=>{
    return del(['**/obj', '**/bin']);
})
gulp.task('restore', ['clean'], ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(restore());
})

gulp.task('build', ['restore'], ()=>{
    return gulp.src('**/*.csproj', {read: false})
        .pipe(build({configuration: 'Release', version: '1.3.0'}))
});

gulp.task('test', ['build'], ()=>{
    return gulp.src('tst/*.csproj', {read: false})
        .pipe(test())
});

gulp.task('publish', ['test'], ()=>{
    return gulp.src('**/*.csproj', {read: false})
                .pipe(publish())
})

gulp.task('pack', ['build'], ()=>{
    return gulp.src('**/*.csproj', {read: false})
                .pipe(pack({output: path.join(process.cwd(), 'nupkgs')}))
})

gulp.task('preflight', ['restore', 'build', 'test', 'publish', 'pack']);
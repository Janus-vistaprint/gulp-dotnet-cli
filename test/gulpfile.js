let gulp = require('gulp');
let { clean, restore, build, test, pack, publish, run } = require('../dist/index');
let path = require('path');
let process = require('process');

gulp.task('clean', () => {
    return gulp.src('**/*.csproj', { read: false })
        .pipe(clean());
});

gulp.task('restore', ['clean'], () => {
    return gulp.src('**/*.csproj', { read: false })
        .pipe(restore({ echo: true }));
});

gulp.task('build', ['restore'], () => {
    return gulp.src('**/*.csproj', { read: false })
        .pipe(build({ configuration: 'Release', version: '1.3.0', echo: true }));
});

gulp.task('test', ['build'], () => {
    return gulp.src('tst/*.csproj', { read: false })
        .pipe(test({ echo: true }));
});

gulp.task('publish', ['test'], () => {
    return gulp.src('**/*.csproj', { read: false })
        .pipe(publish());
});

gulp.task('run', () => {
    return gulp.src('**/*.csproj', { read: false })
        .pipe(run());
});

gulp.task('pack', ['build'], () => {
    return gulp.src('**/*.csproj', { read: false })
        .pipe(pack({ output: path.join(process.cwd(), 'nupkgs'), echo: true, noRestore: true }));
});

gulp.task('run:args', [], () => {
    return gulp.src('args/*.csproj', { read: false })
        .pipe(run({
            additionalArgs: ['Steve'],
            echo: true
        }));
});


gulp.task('preflight', ['restore', 'build', 'test', 'publish', 'pack']);

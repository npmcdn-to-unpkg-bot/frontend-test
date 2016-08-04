var gulp = require('gulp');
var pkg = require('./package.json');

var webserver = require('gulp-webserver');

// webserver reload
gulp.task('webserver', function () {
    gulp.src('public')
        .pipe(webserver({
            host: 'localhost',
            port: 3000,
            livereload: true
        }));
});

gulp.task('default', ['webserver']);

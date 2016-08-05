var gulp        = require('gulp');
var pkg         = require('./package.json');

var react       = require('gulp-react');
var plumber     = require('gulp-plumber');
var webserver   = require('gulp-webserver');

// Javascript
gulp.task('js', function () {
  gulp.src('./src/vendor/*.js')
    .pipe(gulp.dest('./public/assets/js/'));
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./public/assets/js/'));

  return gulp.src('./src/jsx/*.jsx')
    .pipe(plumber())
    .pipe(react())
    .pipe(gulp.dest('./public/assets/js/'));
});

// watch
gulp.task('watch', function(){
  gulp.watch('./src/jsx/*.jsx', ['js']);
});
// webserver reload
gulp.task('webserver', function () {
    gulp.src('./public')
        .pipe(webserver({
            host: 'localhost',
            port: 3000,
            livereload: true
        }));
});

gulp.task('default', ['js', 'watch', 'webserver']);

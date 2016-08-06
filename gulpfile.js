var gulp        = require('gulp');
var pkg         = require('./package.json');

var plumber     = require('gulp-plumber');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var webserver   = require('gulp-webserver');

// Javascript
gulp.task('js', function() {
  // redux（ES2015で書かれているのでtransformする）
  browserify('./src/jsx/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/assets/js/'));

  // jsx（将来的に削除）
  browserify('./src/jsx/main.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/assets/js/'));

  // vendor（既製品）
  return gulp.src('./src/vendor/*.js')
    .pipe(gulp.dest('./public/assets/js/'));
});

// CSS
gulp.task('css', function() {
  // vendor（既製品）
  return gulp.src('./src/vendor/*.css')
    .pipe(gulp.dest('./public/assets/css/'));
});

// watch
gulp.task('watch', function(){
  gulp.watch('./src/jsx/*.jsx', ['js']);
  gulp.watch('./src/js/*.js', ['js']);
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

gulp.task('default', ['js', 'css', 'watch', 'webserver']);

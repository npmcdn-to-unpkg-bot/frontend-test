'use strict';

var gulp        = require('gulp');
var pkg         = require('./package.json');
var plumber     = require('gulp-plumber');
var uglify      = require('gulp-uglify');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require("vinyl-buffer");
var webserver   = require('gulp-webserver');

process.env.NODE_ENV = 'production';

// Javascript
gulp.task('js', function() {
  browserify({
      entries: './src/jsx/index.jsx',
      extensions: [".jsx"],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js/'));

  browserify('./src/route/index.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('route.js'))
    .pipe(gulp.dest('./public/assets/js/'));

  browserify('./src/app/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/assets/js/'));

  browserify('./src/comments/index.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('comments.js'))
    .pipe(gulp.dest('./public/assets/js/'));

  browserify('./src/counter/index.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('counter.js'))
    .pipe(gulp.dest('./public/assets/js/'));

  browserify('./src/todo/index.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('todo.js'))
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
  gulp.watch('./src/**/*.jsx', ['js']);
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

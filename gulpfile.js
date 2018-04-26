var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var hash_src = require("gulp-hash-src");

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./css/'))
});

gulp.task('script-min', function () {
  return gulp.src(['vendor/renderSpeakers.js', 'script.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task("hash", function() {
  return gulp.src(["./html/index.html"])
    .pipe(hash_src({
      build_dir: "./",
      src_path: "./html",
      hash_len: 5,
      exts: [".js", ".css"],
      query_name: 'v'
    }))
    .pipe(gulp.dest("./"))
});

//Watch task
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch(['script.js', 'vendor/renderSpeakers.js'],['script-min']);
  gulp.watch(['script.js', 'vendor/renderSpeakers.js', 'sass/**/*.scss'],['hash']);
});

gulp.task('default', ['styles', 'script-min', 'hash', 'watch']);
gulp.task('prod', ['styles', 'script-min', 'hash']);

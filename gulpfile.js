var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var hash_src = require("gulp-hash-src");
var htmlmin = require('gulp-htmlmin');

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
  return gulp.src([
      // libs
      'vendor/jquery/jquery.min.js',
      'vendor/bootstrap/js/bootstrap.bundle.min.js',
      // 'vendor/bootstrap/js/bootstrap.min.js',
      'vendor/touchSwipe/jquery.touchSwipe.min.js',
      'vendor/animate/animateit.js',
      'vendor/jquery-tmpl/jquery.tmpl.min.js',
      'vendor/jquery-easing/jquery.easing.min.js',
      'vendor/scrollreveal/scrollreveal.min.js',
      'vendor/firebase/firebase.js',
      'vendor/jqcloud/jqcloud-1.0.4.min.js',
      'vendor/beefup/beefup.min.js',

      //scripts
      'vendor/renderSpeakers.js',
      'vendor/renderTrainings.js',
      'vendor/renderKeyTopics.js',
      'vendor/renderSchedule.js',
      'script.js'
    ])
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
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./"))
});

//Watch task
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch(['script.js', 'vendor/**/*.js'],['script-min']);
  gulp.watch(['script.js', 'vendor/**/*.js', 'sass/**/*.scss', 'html/index.html'],['hash']);
});

gulp.task('default', ['styles', 'script-min', 'hash', 'watch']);
gulp.task('prod', ['styles', 'script-min', 'hash']);

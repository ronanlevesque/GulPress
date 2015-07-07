var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var $$ = require('gulp-load-plugins')();

// Handle CLI errors

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// Folders

var themeFolder = 'example/';
var devFolder = themeFolder + 'dev/';

var devSubFolder = {
  sass  : devFolder + 'sass/',
  js : devFolder  + 'js/'
};

var distFolder = {
  css  : themeFolder + 'css/',
  js : themeFolder + 'js/',
  img  : themeFolder + 'img/'
};

// Styles

gulp.task('styles', function() {
  return gulp.src(devSubFolder.sass + '**/*.scss')
  .pipe($$.sass())
  .on('error', $$.notify.onError("Error: <%= error.message %>"))
  .on('error', handleError)
  .pipe($$.autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(distFolder.css))
  .pipe($$.minifyCss({keepSpecialComments: 1}))
  .pipe(gulp.dest(distFolder.css))
});

// Scripts

gulp.task('scripts', function() {
  var b = browserify({
    entries: devSubFolder.js + 'main.js',
    debug: true
  })
  .transform(babelify);

  return b.bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe($$.sourcemaps.init({loadMaps: true}))
  .on('error', $$.notify.onError("Error: <%= error.message %>"))
  .on('error', handleError)
  .pipe($$.uglify())
  .pipe($$.sourcemaps.write('./'))
  .pipe(gulp.dest(distFolder.js))
  .pipe($$.livereload())
});

// Images

gulp.task('images', function() {
  return gulp.src(distFolder.img + '**/*')
  .pipe($$.imagemin({
    optimizationLevel: 7,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(distFolder.img))
	.pipe($$.livereload())
});

// PHP reload

gulp.task('phpReload', function() {
  return gulp.src(themeFolder + '**/*.php')
  .pipe($$.livereload())
});

// JSHint

gulp.task('jshint', function() {
  return gulp.src(devFolder.js + '**/*.js')
  .pipe($$.jshint({
    browser: true,
    curly: true,
    eqeqeq: true,
    eqnull: true,
    esnext: true,
    latedef: true,
    noarg: true,
    undef: true,
    unused: true
  }))
  .pipe($$.jshint.reporter('default'))
});

// Watch files

gulp.task('watch', function() {
  $$.livereload.listen();

  gulp.watch(devSubFolder.sass + '**/*.scss', ['styles']);
  gulp.watch(devSubFolder.js + '**/*.js', ['scripts']);
  gulp.watch(distFolder.img + '**/*', ['images']);
  gulp.watch([themeFolder + '**/*.php', themeFolder + '**/*.css'], ['phpReload']);
});

gulp.task('default', ['styles', 'scripts', 'images', 'watch']);

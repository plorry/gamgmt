var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var connect = require('gulp-connect');
var util = require('gulp-util');

function compile(watch) {
  // define a path to watch - allow other paths to be passed in
  var watchPath = util.env.path ? util.env.path : '';
  var bundler = watchify(browserify('./' + watchPath + 'src/index.js', { debug: true }).transform(babel));
  
  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./' + watchPath))
      .pipe(gulp.dest('./' + watchPath + 'dist'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

function startServer() {
  connect.server({
    root: 'dist'
  });
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
gulp.task('server', function() { return startServer(); });

gulp.task('default', ['watch', 'server']);

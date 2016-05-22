'use strict';

var
  gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create(),


  CONF = {
    SUCCESS: true,
    PATHS: {
      watch: {
        admin: '',
        index: '',
        components: '',
        theme: '',
        vendor: '',
        js: '',
      },
      main: {
        scss: '',
        scssAdmin: '',
        js: ''
      },
      build: {
        css: '',
        js: '',
      }
    }
  };

var getTask = function(task) {
  return require('./gulp/tasks/' + task)(gulp, plugins, CONF);
}

gulp
  .task('scss:compile', getTask('scss:compile'))
  .task('scss:admin-compile', getTask('scss:admin-compile'))
  .task('scss:build', getTask('scss:build'))
  .task('js:compile', getTask('js:compile'))
  .task('js:build', getTask('js:build'))

  .task('watch', function() {
    browserSync.init({
      proxy: ""
      // server: {
      //   baseDir: "./web",
      //   // reloadDelay: 400,
      //   notify: true
      // }
    });
    plugins.browserSync = browserSync;

    gulp.watch([
      CONF.PATHS.watch.index,
      CONF.PATHS.watch.components,
      CONF.PATHS.watch.theme,
      CONF.PATHS.watch.vendor
    ], ['scss:compile']);
    gulp.watch([
      CONF.PATHS.watch.admin,
      CONF.PATHS.watch.components,
      CONF.PATHS.watch.theme,
      CONF.PATHS.watch.vendor
    ], ['scss:admin-compile']);
    gulp.watch(CONF.PATHS.watch.js, ['js:compile']).on('change', browserSync.reload);
  })
  .task('build', ['scss:build', 'js:build'])
  .task('default', ['build']);

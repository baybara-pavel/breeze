module.exports = function(gulp, plugins, CONF) {
  return function() {
    require('../webpack')(gulp, plugins, CONF)
    .pipe(plugins.uglify())
    .pipe(gulp.dest(CONF.PATHS.build.js))
  }
}

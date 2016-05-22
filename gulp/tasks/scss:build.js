module.exports = function(gulp, plugins, CONF) {
  return function() {
    CONF.SUCCESS = true;
    require('../sass')(gulp, plugins, CONF)
      .pipe(plugins.cssnano())
      // .pipe(rename('.css'))
      // .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(CONF.PATHS.build.css))
  }
}

module.exports = function(gulp, plugins, CONF) {
  notify = require('../notify');
  return function() {
    CONF.SUCCESS = true;
    gulp.src(CONF.PATHS.main.scss)
      // .pipe(plugins.rename('index.css'))
      .pipe(plugins.sourcemaps.init())
      require('../sass')({
        obj: gulp,
        plugins: plugins,
        sucsess: CONF.SUCCESS,
        path: CONF.PATHS.main.scss
      })
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(CONF.PATHS.build.css))
      .on('end', function() {
        if (CONF.SUCCESS) {
          plugins.browserSync.reload();
          plugins.util.log(
            '\n\n'
            + plugins.util.colors.yellow('Compile scss sucsess!')
            + '\n' + plugins.util.colors.green('Waiting ... ')
            + '\n'
          );
          notify().notifySuccess('Compile scss sucsess!');
        }
      })
  }
}

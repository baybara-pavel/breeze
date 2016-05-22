module.exports = function(gulp, plugins, CONF) {
  notify = require('../notify');
  return function() {
    CONF.SUCCESS = true;
    require('../webpack')(gulp, plugins, CONF)
      .pipe(gulp.dest(CONF.PATHS.build.js))
      .on('end', function() {
        if(CONF.SUCCESS) {
          plugins.util.log(
            plugins.util.colors.yellow('Compile js sucsess!')
            + '\n' + plugins.util.colors.green('Waiting ... ')
          );
          notify().notifySuccess('Compile js sucsess!');
        }
      })
  }
}

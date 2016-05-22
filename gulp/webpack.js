module.exports = function(gulp, plugins, CONF) {
  webpack = require('../node_modules/webpack-stream');
  notify = require('./notify');
  return gulp.src(CONF.PATHS.main.js)
    .pipe(
      webpack({
        debug: true,
        devtool: 'eval',
        output: {
          filename: 'index.js'
        }
      })
      .on('error', function(error) {
        CONF.SUCCESS = false;
        notify().notifyError(error);
        this.emit('end');
      })
    )
};

module.exports = function(params) {
  autoprefixer = require ('../node_modules/autoprefixer');
  notify = require('./notify');
  printError = require('./printError')(params.plugins);
  return params.obj.src(params.path)
    .pipe(params.plugins.sass()
      .on('error', function (error) {
        params.sucsess = false;
        printError(error);
        notify().notifyError(error);
        this.emit('end');
      })
    )
    .pipe(
      params.plugins.postcss([
        autoprefixer({
          browsers: ['last 2 versions']
        })
      ])
    )
}

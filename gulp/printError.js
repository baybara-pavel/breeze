module.exports = function(plugins) {
  return function(error) {
    plugins.util.log(
      plugins.util.colors.red(
        '\n\n'
        + error.message
        + '\n\n'
        + plugins.util.colors.green('Waiting ... ')
        + '\n'
        // .split('\n')
        // .map(function(el,index) {
        //   if(index === 0) {
        //     return el;
        //   } else {
        //     return '\t   ' + el;
        //   }
        // })
        // .join('\n')
      )
    );
  }
}

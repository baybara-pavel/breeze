module.exports = function() {
  notifier = require ('../node_modules/node-notifier');
  return {
    notifyError: function(error) {
      notifier.notify({
        title: error.name + ' in ' + error.plugin,
        message: error.message,
        icon: './gulp/wrong.png'
      });
    },
    notifySuccess: function(message) {
      notifier.notify({
        title: 'Sucsess',
        message: message,
        icon: './gulp/ok.png'
      });
    }
  }
}

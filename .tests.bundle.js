const context = require.context('./test', true, /.+Spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
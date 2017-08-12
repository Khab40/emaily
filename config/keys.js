// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV == 'production') {
  // we in production - return the prod set of keys
  module.exports = require('./prod.js');
} else {
  // we are in development - return dev keys
  module.exports = require('./dev.js');
}

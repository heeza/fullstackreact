// keys.js - figure out what set of credentials to return

// prod
// 450223430630-fejehivorkv8bs07u3sn9pdk8kvkdbv9.apps.googleusercontent.com
// I2Sh0lVatYfcum7InDB7wTfE

if (process.env.NODE_ENV == 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
}
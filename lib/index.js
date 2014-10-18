var _sysconf = require('../build/Release/sysconf.node');

/**
 * Get Sysconf
 * @param {Number|String} param - sysconf param 
 *
 * @return {Number} value
 *
 */
var exports = module.exports = _sysconf.sysconf;
exports.get = module.exports;
exports.keys = _sysconf.keys;
var keys = _sysconf.keys();

for (var k in keys) {
  module.exports[k] = keys[k]; 
};

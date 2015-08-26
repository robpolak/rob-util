var robUtil = function robUtil() {
  //private namespaces
  this.$__core = require('./core/core');

  //public
  this.random = require('./util/random');
};

module.exports =  new robUtil();
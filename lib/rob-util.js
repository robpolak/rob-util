'use strict';
class robUtil {
  constructor() {
    //private namespaces
    this.$__core = require('./core/core');

    //public
    this.random = require('./util/random');
    this.cb = require('./util/callbacks');
  }
};

module.exports =  new robUtil();
'use strict';
var callbacks = class {
  constructor() {

  }

  /**
   * Callback Throw function
   * @param cb
   * @returns {Function}
   */
  callbackThrow(cb) {
    return function () {
      if (!arguments) {
        cb();
      }
      else {
        let args = Array.prototype.slice.call(arguments);
        let error = args[0];
        if (error) {
          throw error;
        }
        cb.apply(this, args);
      }
    }
  };

  /**
   * Callback method that will always invoke a callback
   * @param cb
   * @returns {Function}
   */
  callbackAlways(cb) {
    return function () {
      let args = Array.prototype.slice.call(arguments);
      cb.apply(this, args);
    }
  };

};


module.exports = new callbacks();
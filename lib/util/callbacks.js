var callback = function() {

};


/**
 * Method for handling async callbacks.  This method will callback unless there is an error.
 * The callback must have the syntax of function(err, arg1,arg2,arg3) etc..
 * @param cb
 * @returns {Function}
 */
callback.prototype.callbackThrow = function(cb) {
  return function() {
    if(!arguments) {
      cb();
    }
    else {
      var args = Array.prototype.slice.call(arguments);
      var error = args[0];
      if (error) {
        throw error;
      }
      cb.apply(this, args);
    }
  }
};

/**
 * Method that will always be invoked when an async method returns.
 * @param cb
 * @returns {Function}
 */
callback.prototype.callbackAlways = function(cb) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    cb.apply(this, args);
  }
};

module.exports = new callback();
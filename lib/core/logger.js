/*
var logger = function() {
  this.errorLoggers = [];
};

logger.prototype.onError = function(func) {
  if(typeof func === 'function')
    this.errorLoggers.push(func);
};


logger.prototype.LogError = function() {
  for(var x = 0,len = this.errorLoggers.length;x < len;x++) {
    var func = this.errorLoggers[x];
    var args = Array.prototype.slice.call(arguments);
    func.apply(this, args);
    func();
  }
};

module.exports = new logger();
  */
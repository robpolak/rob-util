var helper = function() {

};

helper.prototype.measureFunctionTime = function(fn, cnt) {
  var st = new Date();
  for(var x = 0;x < cnt;x++) {
    fn();
  }
  var end = new Date();
  return end - st;
};

module.exports = new helper();
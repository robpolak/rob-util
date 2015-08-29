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

helper.prototype.logPerfTest = function(testName, expected,actual, iterations) {
  console.log('Test: \t '+testName+ "\t[" + expected + 'ms] \t [' + actual + 'ms ] \t x'+ iterations);
};

helper.prototype.measureAsyncTime = function(fn, totalRuns, done) {
  var total = 0;

  function measure(count) {
    count || (count = 1);
    if(count > totalRuns)
    {
      done(total);
      return;
    }

    measureAndWait(fn, function() {
      setImmediate(function(){measure(++count)});
    });
  }

  function measureAndWait(fn, cb){
    var st = new Date();
    var end = null;
    fn(function() {
      end = new Date();
      var diff = end - st;
      total += diff;
      cb();
    });
  }
  measure();
};


module.exports = new helper();
describe('util/callbacks.js - Perf Tests', function() {
  var ru = require('../../../lib/rob-util');
  var expect = require('chai').expect;
  var testHelper = require('../../testHelper');

  beforeEach(function () {
  });

  afterEach(function () {
  });

  describe('callbackThrow', function() {
    it('callbackThrow', function(done) {
      var runs = 10000;

      var cbFunc = function(err,a1,a2,a3) {
      };

      testHelper.measureAsyncTime(function(cb){ru.cb.callbackThrow(cbFunc); cb();}, runs, function(time) {
        var threshold = 10;
        testHelper.logPerfTest("CallbackThrow", threshold, time, runs);
        expect(time).to.be.below(threshold);

        done();
      });

    });


  });



});
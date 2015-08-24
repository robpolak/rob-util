describe('util/random.js - Perf Tests', function() {
  var ru = require('../../lib/rob-util');
  var expect = require('chai').expect;
  var testHelper = require('../testHelper');

  beforeEach(function () {
  });

  afterEach(function () {
  });

  describe('randomAsciiString', function() {
    it('randomAsciiString', function() {
      var threshold = 70;
      var cnt = 1000;
      var time = testHelper.measureFunctionTime(function() {
        ru.random.randomAsciiString(1000);
      }, cnt);
      console.log('randomAsciiString: [ ' + time + 'ms ]');
      expect(time).to.be.below(threshold);
    });

    it('randomAsciiString', function() {
      var threshold = 1;
      var cnt = 1;
      var time = testHelper.measureFunctionTime(function() {
        ru.random.randomAsciiString(1000);
      }, cnt);
      console.log('randomAsciiString: [ ' + time + 'ms ]');
      expect(time).to.be.below(threshold);
    });



  });



});
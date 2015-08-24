describe('robUtil.js Tests', function() {
  var ru = require('../../lib/rob-util');
  var expect = require('chai').expect;

  beforeEach(function () {
  });

  afterEach(function () {
  });


  describe('Random Namespace', function() {

    it('Is an OBJECT', function() {
      expect(ru).to.be.a('object');
    });

  });

});
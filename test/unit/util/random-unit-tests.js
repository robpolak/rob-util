describe('util/random.js', function() {
  var ru = require('../../../lib/rob-util');
  var expect = require('chai').expect;

  beforeEach(function () {
  });

  afterEach(function () {
  });


  describe('Random Namespace', function() {

    it('Is an OBJECT', function() {
      expect(ru.random).to.be.a('object');
    });

  });

  describe('randomAsciiString', function() {
    it('randomAsciiString', function() {
      expect(ru.random.randomAsciiString).to.be.a('function');
    });

    it('randomAsciiString length 5', function() {
      expect(ru.random.randomAsciiString(5)).to.have.length(5);
    });

    it('randomAsciiString length 5000', function() {
      expect(ru.random.randomAsciiString(5000)).to.have.length(5000);
    });

    it('randomAsciiString charset valid', function() {
      expect(ru.random.randomAsciiString(5, 'aaa')).to.eql('aaaaa');
    });

    it('randomAsciiString invalid charset throw', function() {
      var exception = null;
      try {
        ru.random.randomAsciiString(5,['a','b']);
      }catch(ex) {
       exception = ex;
      }
      expect(exception).to.be.a('string');
    });

    it('randomAsciiString empty parameter set', function() {
      var exception = null;
      try {
        ru.random.randomAsciiString(5,['a','b']);
      }catch(ex) {
        exception = ex;
      }
      expect(exception).to.be.a('string');
    });

  });



});
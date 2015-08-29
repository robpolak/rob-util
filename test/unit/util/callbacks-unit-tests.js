describe('util/callbacks.js', function() {
  var ru = require('../../../lib/rob-util');
  var expect = require('chai').expect;

  beforeEach(function () {
  });

  afterEach(function () {
  });


  describe('Callback Namespace', function() {

    it('Is an OBJECT', function() {
      expect(ru.cb).to.be.a('object');
    });

  });

  describe('callbackThrow', function() {
    it('callbackThrow', function() {
      expect(ru.cb.callbackThrow).to.be.a('function');
    });

    it('callbackThrow - Happy Path', function(done) {

      var cbFunc = function(err,a1,a2,a3) {
        expect(err).to.be.eql(null);
        expect(a1).to.be.eql(1);
        expect(a2).to.be.eql("2");
        expect(a3).to.be.eql({"3":3});
        done();
      };

      var func = function(cb) {
        cb(null, 1,"2",{"3":3})
      };

      func(ru.cb.callbackThrow(cbFunc));

    });

    it('callbackThrow - No Args - Should callback', function(done) {
      var cbFunc = function(err) {
        expect(err).to.be.eql(undefined);
        done();
      };

      var func = function(cb) {
        cb()
      };

      func(ru.cb.callbackThrow(cbFunc));

    });

    it('callbackThrow - Throws Error', function() {
      var err = "some error";
      var cbFunc = function(err,a1,a2,a3) {
        throw "callback should not be invoked"
      };
      var func = function(cb) {
        cb(err, 1,"2",{"3":3})
      };

      expect(function() {
        func(ru.cb.callbackThrow(cbFunc));
      }).to.throw(err);
    });

  });

  describe('callbackAlways', function() {
    var err = "some error";
    it('callbackAlways', function () {
      expect(ru.cb.callbackAlways).to.be.a('function');
    });

    it('callbackThrow - Happy Path', function (done) {
      var cbFunc = function (err, a1, a2, a3) {
        expect(err).to.be.eql(err);
        expect(a1).to.be.eql(1);
        expect(a2).to.be.eql("2");
        expect(a3).to.be.eql({"3": 3});
        done();
      };

      var func = function (cb) {
        cb(err, 1, "2", {"3": 3})
      };

      func(ru.cb.callbackAlways(cbFunc));

    });
  });

});
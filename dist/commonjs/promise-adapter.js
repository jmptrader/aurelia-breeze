"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Q = exports.Q = (function () {
  function Q() {
    _classCallCheck(this, Q);
  }

  _prototypeProperties(Q, {
    defer: {
      value: function defer() {
        return new Deferred();
      },
      writable: true,
      configurable: true
    },
    resolve: {
      value: function resolve(data) {
        return new Promise(function (resolve, reject) {
          resolve(data);
        });
      },
      writable: true,
      configurable: true
    },
    reject: {
      value: function reject(reason) {
        return new Promise(function (resolve, reject) {
          reject(reason);
        });
      },
      writable: true,
      configurable: true
    }
  });

  return Q;
})();
var Deferred = exports.Deferred = function Deferred() {
  _classCallCheck(this, Deferred);

  var self = this;
  this.promise = new Promise(function (resolve, reject) {
    self.resolve = resolve;
    self.reject = reject;
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
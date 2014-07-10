(function() {
  var MainCtrl, app,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = angular.module('barebones', []);

  app.controller('mainController', MainCtrl = (function() {
    MainCtrl.$inject = ['$scope', '$http'];

    function MainCtrl(scope, http) {
      this.scope = scope;
      this.http = http;
      this.changeAppName = __bind(this.changeAppName, this);
      this.scope.appName = 'Frontend Goodness';
      this.scope.changeAppName = this.changeAppName;
    }

    MainCtrl.prototype.changeAppName = function() {
      return this.scope.appName = 'Changed you!';
    };

    return MainCtrl;

  })());

}).call(this);

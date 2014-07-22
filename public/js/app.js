var Main, MainApp;

Main = (function() {
  function Main($scope) {
    $scope.appName = 'Frontend Goodness';
  }

  return Main;

})();

MainApp = (function() {
  function MainApp() {
    return [];
  }

  return MainApp;

})();

angular.module('app', MainApp()).controller('mainController', ['$scope', Main]);

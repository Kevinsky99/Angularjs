(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Kevin";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();

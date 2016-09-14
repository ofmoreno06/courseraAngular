// add a IIFE for avoiding local varibles bleeding out the global scope
(function(){

// use strict for avoiding problems
'use strict';

// defining my application
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.nombre = "oscar";
  // $scope.lunchMenu = "";
  // //$scope.check = function(){};
  // $scope.message = "Hola";

}

})();

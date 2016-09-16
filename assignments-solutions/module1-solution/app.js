// add a IIFE for avoiding local varibles bleeding out the global scope
(function(){

// use strict for avoiding problems
'use strict';

// defining my application - no dependencies
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

// using the $inject property to protect services from minification
LunchCheckController.$inject = ['$scope'];

//----------------------- LunchCheckController function -----------------------
function LunchCheckController($scope){
  $scope.placeholder1 = "list comma separated dishes you usually have for lunch";
  $scope.menuList = "";
  $scope.note = "Empty items are not valid to count, i.e. (item1,,,item2) are just 2 items.";

  $scope.check = function(listToCheck){
    if (listToCheck != 0){
      var items = chopString(listToCheck);
      $scope.message = items <= 3 ? "Enjoy!" : "Too much!";
      $scope.textColor = "green";
    } else {
        $scope.message = "Please enter data first";
        $scope.textColor = "red";
      }
  };
  
  var chopString = function(stringToChop){
    var arrayOfStrings = stringToChop.split(/,\s*\w/g);
    return arrayOfStrings.length;
  };
} //------------------------ End LunchCheckController ------------------------

})();

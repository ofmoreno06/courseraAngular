(function(){ // IIFE
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService ($http, ApiBasePath){
  var service = this;

  service.getAllCategories = function(){
    return $http(
      { method: 'GET',
        url: ApiBasePath + '/categories.json'})
    .then(function(result){
      var allCategories = result.data;
      return allCategories;
    });
  }

  service.getItemsForCategory = function(categoryShortName){
    return $http(
      { method: 'GET',
        url: ApiBasePath + '/menu_items.json',
        params: {category: categoryShortName}
      })
    .then(function(result){
      var oneCategory = result.data;
      return oneCategory;
    });
  }

  return service;
}

})();    // END IIFE

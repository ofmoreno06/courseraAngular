/* Immediatly-invoked function expression which wraps whole script
for avoiding local variables bleeding out to global scope */
(function(){
  'use strict'; // for avoiding problems

  // Defining app module, controllers, services, constants and directives
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownCotroller)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems',foundItems);

  // injecting dependencies and creating controller
  NarrowItDownCotroller.$inject = ['MenuSearchService'];
  function NarrowItDownCotroller(MenuSearchService){
    var narrow = this;

    narrow.searchTerm="";

    narrow.narrowIt = function (){
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
      .then(function(response){
        narrow.found = response;
        console.log("found " + narrow.found.length + " items");
      }).catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };

    narrow.removeItem = function(index){
      narrow.found.splice(index, 1);
    };
  };// END NarrowItDownCotroller

  // injecting dependencies and creating service
  MenuSearchService.$inject = ['$http','ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){

      // Retrieve the list of all menu items and then filter the result
        return $http({
          method: "GET",
          url: ApiBasePath + "/menu_items.json"
        }).then(function(result){
          var allItems = result.data.menu_items;
          var foundItems = [];
          if (searchTerm.length !== 0){
            allItems.forEach(function(item){
                if (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
                  foundItems.push(item);
                };
            });
          }
          return foundItems;
        });
    };
  };// END MenuSearchService

  // injecting dependencies and creating directive
  function foundItems(){
    var ddo =
      {
        templateUrl: 'found-items.template.html',
        scope: {
            foundedItems: '<',
            onRemove: '&'
        },
        controller: foundItemsController,
        bindToController: true,
        controllerAs: 'ctrl'
      };

    return ddo;
  };

  function foundItemsController(){
  };

})();

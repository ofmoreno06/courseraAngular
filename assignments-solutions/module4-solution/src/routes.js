(function(){ // IIFE
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouteProvider){
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories',{
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items',{
    url: '/items/{categoryID}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'itemsController as itemsCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
        return MenuDataService.getItemsForCategory($stateParams.categoryID);
      }]
    }
  });

  $urlRouteProvider.otherwise('/');
}

})();    // END IIFE

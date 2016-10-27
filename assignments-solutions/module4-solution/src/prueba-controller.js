(function(){
'use strict';

angular.module('MenuApp')
.controller('pruebaController',pruebaController);

pruebaController.$inject = ['MenuDataService'];
function pruebaController(MenuDataService){
  var prueba = this;

  prueba.categories = MenuDataService.getAllCategories();
  console.log('prueba.categories: ', prueba.categories);

  prueba.items = MenuDataService.getItemsForCategory('L');
  console.log('prueba.Items: ', prueba.items);

}

})();

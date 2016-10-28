(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories){
  var catCtrl = this;
  catCtrl.lista = categories;
  // MenuDataService.getItemsForCategory("L").then(
  //   function(result){
  //     catCtrl.oneCategory = result;
  //     console.log('One category', catCtrl.oneCategory);
  //   }, function(error){
  //     console.error(error);
  // });
}

})();

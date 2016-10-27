(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService){
  var catCtrl = this;
  catCtrl.lista = [];
  MenuDataService.getAllCategories().then(function(response){
    catCtrl.lista = response;
    console.log('catCtrl DentroRespuesta', catCtrl.lista);
  });
  console.log('catCtrl fueraRespuesta', catCtrl.lista);
  catCtrl.nombre = "Oscar";
  catCtrl.dame = function(){
    console.log('catCtrl fueraRespuesta', catCtrl.lista);
  }
}



})();
